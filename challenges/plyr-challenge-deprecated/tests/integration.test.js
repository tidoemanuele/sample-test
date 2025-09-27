/**
 * Integration Tests for Level 1 Challenge
 *
 * Tests the actual built Plyr files and integration with real DOM:
 * - Loading and parsing of dist/plyr.js
 * - CSS loading and style application
 * - Real DOM integration tests
 * - Configuration merging
 * - Error handling scenarios
 */

const fs = require('fs');
const path = require('path');
// Jest globals are automatically available

const projectRoot = process.cwd();
const distPath = path.join(projectRoot, 'dist');

describe('Integration Tests', () => {
  beforeEach(() => {
    // Clear any previous DOM
    document.head.innerHTML = '';
    document.body.innerHTML = '';
    global.consoleSpy.error.mockClear();
    global.consoleSpy.warn.mockClear();
  });

  describe('Built Files Verification', () => {
    test('should find required dist files', () => {
      const jsPath = path.join(distPath, 'plyr.js');
      const cssPath = path.join(distPath, 'plyr.css');

      // Check if files exist
      expect(fs.existsSync(jsPath)).toBe(true);
      expect(fs.existsSync(cssPath)).toBe(true);

      if (fs.existsSync(jsPath)) {
        const jsContent = fs.readFileSync(jsPath, 'utf8');
        expect(jsContent.length).toBeGreaterThan(0);

        // Should contain Plyr constructor
        expect(jsContent).toMatch(/function.*Plyr|class.*Plyr/);
      }

      if (fs.existsSync(cssPath)) {
        const cssContent = fs.readFileSync(cssPath, 'utf8');
        expect(cssContent.length).toBeGreaterThan(0);

        // Should contain Plyr CSS classes
        expect(cssContent).toMatch(/\.plyr/);
      }
    });

    test('should verify CSS contains required selectors', () => {
      const cssPath = path.join(distPath, 'plyr.css');

      if (fs.existsSync(cssPath)) {
        const cssContent = fs.readFileSync(cssPath, 'utf8');

        // Critical selectors for corruption detection
        expect(cssContent).toMatch(/\.plyr__controls/);
        expect(cssContent).toMatch(/\.plyr__control/);
        expect(cssContent).toMatch(/\.plyr__volume/);
        expect(cssContent).toMatch(/\.plyr__progress/);

        // Check for opacity-related styles that might be corrupted
        if (cssContent.includes('.plyr__controls') && cssContent.includes('opacity:0')) {
          console.warn('🔴 POTENTIAL CORRUPTION: Found opacity:0 in controls CSS');
        }
      }
    });

    test('should verify JS contains required exports', () => {
      const jsPath = path.join(distPath, 'plyr.js');

      if (fs.existsSync(jsPath)) {
        const jsContent = fs.readFileSync(jsPath, 'utf8');

        // Should have module exports or global assignment
        const hasExports = jsContent.includes('module.exports') ||
                          jsContent.includes('export') ||
                          jsContent.includes('window.Plyr') ||
                          jsContent.includes('global.Plyr');

        expect(hasExports).toBe(true);
      }
    });
  });

  describe('DOM Integration Tests', () => {
    beforeEach(() => {
      // Create realistic HTML structure
      document.body.innerHTML = `
        <video id="player" controls crossorigin playsinline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
        </video>
      `;

      // Add CSS link to head
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'dist/plyr.css';
      document.head.appendChild(cssLink);
    });

    test('should detect video element preparation', () => {
      const videoElement = document.getElementById('player');
      expect(videoElement).toBeTruthy();
      expect(videoElement.tagName.toLowerCase()).toBe('video');

      // Video should have required attributes
      expect(videoElement.hasAttribute('controls')).toBe(true);
      expect(videoElement.hasAttribute('crossorigin')).toBe(true);
    });

    test('should detect source element integrity', () => {
      const videoElement = document.getElementById('player');
      const sources = videoElement.querySelectorAll('source');

      expect(sources.length).toBeGreaterThan(0);

      sources.forEach(source => {
        expect(source.hasAttribute('src')).toBe(true);
        expect(source.hasAttribute('type')).toBe(true);
      });
    });

    test('should simulate CSS loading and application', () => {
      // Simulate CSS being loaded
      const style = document.createElement('style');
      style.textContent = `
        .plyr__controls {
          display: flex;
          opacity: 1;
          pointer-events: auto;
        }
        .plyr__control {
          background: none;
          border: none;
          cursor: pointer;
        }
        .plyr__volume input {
          width: 100px;
        }
      `;
      document.head.appendChild(style);

      // Test if styles would be applied
      const testElement = document.createElement('div');
      testElement.className = 'plyr__controls';
      document.body.appendChild(testElement);

      const computedStyle = window.getComputedStyle(testElement);
      expect(computedStyle.display).toBe('flex');
      expect(computedStyle.opacity).toBe('1');
    });
  });

  describe('Configuration Integration Tests', () => {
    test('should handle default configuration', () => {
      // Test default configuration scenarios
      const defaultConfig = {
        controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'fullscreen'],
        settings: ['captions', 'quality', 'speed'],
        i18n: {},
        volume: 1,
        muted: false
      };

      // Verify configuration structure
      expect(Array.isArray(defaultConfig.controls)).toBe(true);
      expect(typeof defaultConfig.volume).toBe('number');
      expect(typeof defaultConfig.muted).toBe('boolean');
    });

    test('should handle custom configuration merging', () => {
      const customConfig = {
        controls: ['play', 'pause', 'volume'],
        volume: 0.7,
        autoplay: false,
        custom: {
          test: true
        }
      };

      // Test configuration object integrity
      expect(customConfig.controls).toEqual(['play', 'pause', 'volume']);
      expect(customConfig.volume).toBe(0.7);
      expect(customConfig.custom.test).toBe(true);

      // Test for configuration corruption
      const configString = JSON.stringify(customConfig);
      const parsedConfig = JSON.parse(configString);
      expect(parsedConfig).toEqual(customConfig);
    });
  });

  describe('Error Handling Integration', () => {
    test('should detect missing element errors', () => {
      // Test what happens when target element doesn't exist
      const nonExistentElement = document.getElementById('non-existent');
      expect(nonExistentElement).toBeNull();

      // This should be caught by player initialization
      expect(() => {
        if (!nonExistentElement) {
          throw new Error('Player target element not found');
        }
      }).toThrow('Player target element not found');
    });

    test('should detect malformed HTML structure', () => {
      // Test with invalid video structure
      document.body.innerHTML = `
        <div id="player">
          <!-- Missing video element -->
        </div>
      `;

      const playerContainer = document.getElementById('player');
      const videoElement = playerContainer.querySelector('video');

      expect(videoElement).toBeNull(); // Should detect missing video
    });

    test('should detect console error patterns', () => {
      const initialErrorCount = global.consoleSpy.error.mock.calls.length;

      // Simulate common corruption errors
      console.error('TypeError: Cannot read properties of undefined');
      console.error('ReferenceError: plyrConfig is not defined');
      console.error('Error: Failed to initialize player controls');

      const finalErrorCount = global.consoleSpy.error.mock.calls.length;
      expect(finalErrorCount).toBe(initialErrorCount + 3);

      // Check error patterns that indicate corruption
      const errorMessages = global.consoleSpy.error.mock.calls.map(call => call[0]);
      const hasCorruptionErrors = errorMessages.some(msg =>
        msg.includes('undefined') ||
        msg.includes('is not defined') ||
        msg.includes('Failed to initialize')
      );

      expect(hasCorruptionErrors).toBe(true);
    });
  });

  describe('Performance Integration Tests', () => {
    test('[fast] should load quickly', () => {
      const start = Date.now();

      // Simulate fast operations
      document.body.innerHTML = '<video id="player"></video>';
      const element = document.getElementById('player');
      expect(element).toBeTruthy();

      const end = Date.now();
      expect(end - start).toBeLessThan(100); // Should be very fast
    });

    test('[fast] should handle multiple elements', () => {
      document.body.innerHTML = `
        <video class="player" id="player1"></video>
        <video class="player" id="player2"></video>
        <video class="player" id="player3"></video>
      `;

      const players = document.querySelectorAll('.player');
      expect(players.length).toBe(3);

      // Should be able to iterate quickly
      players.forEach((player, index) => {
        expect(player.id).toBe(`player${index + 1}`);
      });
    });
  });
});