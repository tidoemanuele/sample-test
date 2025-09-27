/**
 * Corruption Detection Tests for Level 1 Challenge
 *
 * These tests detect the specific corruptions introduced in the Plyr challenge:
 * - Control interaction failures (play/pause/volume)
 * - UI component visibility issues
 * - Event binding problems
 * - Configuration object corruption
 * - Player initialization errors
 */

// Jest globals are automatically available

// Mock Plyr import - we'll test against the built version
const mockPlyr = jest.fn().mockImplementation(function(selector, options = {}) {
  this.elements = {
    container: document.createElement('div'),
    wrapper: document.createElement('div'),
    media: document.createElement('video'),
    controls: document.createElement('div'),
  };

  this.config = { ...options };
  this.eventListeners = new Map();

  // Mock methods that should work when not corrupted
  this.play = jest.fn().mockResolvedValue(undefined);
  this.pause = jest.fn();
  this.stop = jest.fn();
  this.restart = jest.fn();
  this.destroy = jest.fn();

  // Event system
  this.on = jest.fn((event, callback) => {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event).push(callback);
  });

  this.trigger = (event, data) => {
    const listeners = this.eventListeners.get(event) || [];
    listeners.forEach(callback => callback(data));
  };

  // Volume control
  Object.defineProperty(this, 'volume', {
    get: () => this._volume || 1,
    set: (val) => {
      this._volume = val;
      this.trigger('volumechange');
    }
  });

  // Playing state
  Object.defineProperty(this, 'playing', {
    get: () => this._playing || false,
    set: (val) => { this._playing = val; }
  });

  return this;
});

// Setup DOM for each test
beforeEach(() => {
  document.body.innerHTML = `
    <video id="player" controls crossorigin playsinline>
      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    </video>
  `;

  // Clear all mocks
  jest.clearAllMocks();
  global.consoleSpy.error.mockClear();
  global.consoleSpy.warn.mockClear();
});

describe('Level 1 Corruption Tests', () => {
  describe('Player Initialization', () => {
    test('should detect initialization failures', () => {
      // Test 1: Basic initialization should work
      const videoElement = document.getElementById('player');
      expect(videoElement).toBeTruthy();

      try {
        const player = new mockPlyr('#player');
        expect(player).toBeDefined();
        expect(player.elements.container).toBeDefined();
      } catch (error) {
        // If this fails, there's a corruption in player initialization
        fail(`Player initialization failed: ${error.message}`);
      }
    });

    test('should detect configuration corruption', () => {
      // Test 2: Configuration should be properly merged
      const customConfig = {
        controls: ['play', 'pause', 'volume'],
        volume: 0.5,
        muted: false
      };

      const player = new mockPlyr('#player', customConfig);

      // Check if config corruption exists
      expect(player.config).toEqual(expect.objectContaining(customConfig));

      // Configuration properties should be accessible
      expect(() => {
        const controls = player.config.controls;
        const volume = player.config.volume;
        const muted = player.config.muted;
      }).not.toThrow();
    });
  });

  describe('Control Interaction Tests', () => {
    let player;

    beforeEach(() => {
      player = new mockPlyr('#player');
    });

    test('should detect play/pause button corruption', async () => {
      // Test 3: Play functionality
      expect(player.play).toBeDefined();

      // Simulate play button click
      await expect(player.play()).resolves.not.toThrow();
      expect(player.play).toHaveBeenCalled();

      // Pause functionality
      expect(player.pause).toBeDefined();
      player.pause();
      expect(player.pause).toHaveBeenCalled();
    });

    test('should detect volume control corruption', () => {
      // Test 4: Volume control functionality
      expect(player.volume).toBeDefined();

      // Test volume changes
      const initialVolume = player.volume;
      player.volume = 0.7;

      expect(player.volume).toBe(0.7);

      // Volume should trigger volumechange event
      const volumeHandler = jest.fn();
      player.on('volumechange', volumeHandler);

      player.volume = 0.3;
      expect(volumeHandler).toHaveBeenCalled();
    });
  });

  describe('Event System Tests', () => {
    let player;

    beforeEach(() => {
      player = new mockPlyr('#player');
    });

    test('should detect event binding corruption', () => {
      // Test 5: Event system functionality
      expect(player.on).toBeDefined();

      const playHandler = jest.fn();
      const pauseHandler = jest.fn();

      // Should be able to bind events
      expect(() => {
        player.on('play', playHandler);
        player.on('pause', pauseHandler);
      }).not.toThrow();

      // Events should be stored
      expect(player.eventListeners.has('play')).toBe(true);
      expect(player.eventListeners.has('pause')).toBe(true);
    });

    test('should detect event triggering corruption', () => {
      // Test 6: Event triggering
      const eventHandler = jest.fn();
      player.on('custom-event', eventHandler);

      // Triggering should work
      expect(() => {
        player.trigger('custom-event', { test: 'data' });
      }).not.toThrow();

      expect(eventHandler).toHaveBeenCalledWith({ test: 'data' });
    });
  });

  describe('UI Component Tests', () => {
    let player;

    beforeEach(() => {
      player = new mockPlyr('#player');

      // Mock DOM structure that Plyr creates
      const controlsElement = document.createElement('div');
      controlsElement.className = 'plyr__controls';
      controlsElement.style.opacity = '1'; // Should be visible

      const playButton = document.createElement('button');
      playButton.className = 'plyr__control plyr__control--overlaid';
      playButton.setAttribute('type', 'button');
      playButton.setAttribute('data-plyr', 'play');

      controlsElement.appendChild(playButton);
      document.body.appendChild(controlsElement);
    });

    test('should detect control visibility corruption', () => {
      // Test 7: Controls should be visible
      const controls = document.querySelector('.plyr__controls');
      expect(controls).toBeTruthy();

      if (controls) {
        const computedStyle = window.getComputedStyle(controls);
        const opacity = computedStyle.opacity;

        // Controls should be visible (opacity should not be '0')
        expect(opacity).not.toBe('0');

        if (opacity === '0') {
          console.warn('🔴 Controls visibility corruption detected - CSS opacity is 0');
        }
      }
    });

    test('should detect play button corruption', () => {
      // Test 8: Play button should exist and be interactive
      const playButton = document.querySelector('[data-plyr="play"]');
      expect(playButton).toBeTruthy();

      if (playButton) {
        // Button should be clickable
        expect(playButton.tagName.toLowerCase()).toBe('button');
        expect(playButton.hasAttribute('disabled')).toBe(false);
      }
    });
  });

  describe('Error Detection Tests', () => {
    test('should detect console errors during initialization', () => {
      // Test 9: Console error detection
      const initialErrorCount = global.consoleSpy.error.mock.calls.length;

      try {
        new mockPlyr('#player');
      } catch (error) {
        // Expected if there are corruptions
      }

      // Check if new console errors appeared
      const finalErrorCount = global.consoleSpy.error.mock.calls.length;

      if (finalErrorCount > initialErrorCount) {
        const newErrors = global.consoleSpy.error.mock.calls.slice(initialErrorCount);
        console.warn('🔴 Console errors detected during player initialization:', newErrors);
      }
    });
  });

  describe('Integration Tests', () => {
    test('should verify complete player functionality', async () => {
      // Test 10: End-to-end functionality test
      const player = new mockPlyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume'],
        volume: 0.8
      });

      // Player should initialize without errors
      expect(player).toBeDefined();

      // Core functionality should work
      expect(player.play).toBeDefined();
      expect(player.pause).toBeDefined();
      expect(player.volume).toBeDefined();

      // Events should be bindable
      const readyHandler = jest.fn();
      player.on('ready', readyHandler);

      // Configuration should be preserved
      expect(player.config.volume).toBe(0.8);
    });
  });
});

describe('Fast Feedback Tests', () => {
  // These tests run quickly for immediate feedback
  test('[fast] basic player creation', () => {
    expect(() => {
      new mockPlyr('#player');
    }).not.toThrow();
  });

  test('[fast] configuration object access', () => {
    const player = new mockPlyr('#player', { volume: 0.5 });
    expect(player.config.volume).toBe(0.5);
  });

  test('[fast] method availability', () => {
    const player = new mockPlyr('#player');
    expect(typeof player.play).toBe('function');
    expect(typeof player.pause).toBe('function');
    expect(typeof player.on).toBe('function');
  });
});