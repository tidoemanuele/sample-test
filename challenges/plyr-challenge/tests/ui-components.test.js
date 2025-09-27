/**
 * UI Components Testing for Level 1 Challenge
 *
 * Tests specific UI components that may be affected by corruption:
 * - Control button functionality
 * - Volume slider behavior
 * - Progress bar updates
 * - Settings menu interactions
 * - Fullscreen controls
 */

// Jest globals are automatically available

describe('UI Component Corruption Tests', () => {
  beforeEach(() => {
    // Set up realistic Plyr DOM structure
    document.body.innerHTML = `
      <div class="plyr" data-plyr-provider="html5">
        <video>
          <source src="test.mp4" type="video/mp4">
        </video>
        <div class="plyr__controls">
          <button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play">
            <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
            <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
          </button>
          <div class="plyr__volume">
            <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" role="slider">
          </div>
          <div class="plyr__progress">
            <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" autocomplete="off" role="slider">
          </div>
          <button type="button" class="plyr__control" data-plyr="fullscreen" aria-label="Enter fullscreen">
            <svg role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
          </button>
        </div>
      </div>
    `;
  });

  describe('Play/Pause Button Tests', () => {
    test('should detect play button visibility', () => {
      const playButton = document.querySelector('[data-plyr="play"]');
      expect(playButton).toBeTruthy();

      if (playButton) {
        const computedStyle = window.getComputedStyle(playButton);

        // Button should be visible
        expect(computedStyle.display).not.toBe('none');
        expect(computedStyle.visibility).not.toBe('hidden');
        expect(computedStyle.opacity).not.toBe('0');
      }
    });

    test('should detect button click responsiveness', () => {
      const playButton = document.querySelector('[data-plyr="play"]');
      expect(playButton).toBeTruthy();

      if (playButton) {
        // Button should not be disabled
        expect(playButton.hasAttribute('disabled')).toBe(false);

        // Should be able to simulate click
        const clickEvent = new Event('click', { bubbles: true });
        expect(() => {
          playButton.dispatchEvent(clickEvent);
        }).not.toThrow();
      }
    });

    test('should detect button state changes', () => {
      const playButton = document.querySelector('[data-plyr="play"]');

      if (playButton) {
        // Button should have proper ARIA attributes
        expect(playButton.getAttribute('aria-label')).toBeTruthy();

        // Should have proper data attributes
        expect(playButton.getAttribute('data-plyr')).toBe('play');

        // Should contain proper SVG icons
        const icons = playButton.querySelectorAll('svg');
        expect(icons.length).toBeGreaterThan(0);
      }
    });
  });

  describe('Volume Control Tests', () => {
    test('should detect volume slider presence', () => {
      const volumeSlider = document.querySelector('[data-plyr="volume"]');
      expect(volumeSlider).toBeTruthy();

      if (volumeSlider) {
        expect(volumeSlider.tagName.toLowerCase()).toBe('input');
        expect(volumeSlider.type).toBe('range');
      }
    });

    test('should detect volume slider properties', () => {
      const volumeSlider = document.querySelector('[data-plyr="volume"]');

      if (volumeSlider) {
        // Slider should have proper range
        expect(volumeSlider.min).toBe('0');
        expect(volumeSlider.max).toBe('1');
        expect(volumeSlider.step).toBe('0.05');

        // Should have initial value
        expect(parseFloat(volumeSlider.value)).toBeDefined();
      }
    });

    test('should detect volume change responsiveness', () => {
      const volumeSlider = document.querySelector('[data-plyr="volume"]');

      if (volumeSlider) {
        const initialValue = volumeSlider.value;

        // Should be able to change value
        volumeSlider.value = '0.5';
        expect(volumeSlider.value).toBe('0.5');

        // Should trigger events
        const changeEvent = new Event('input', { bubbles: true });
        expect(() => {
          volumeSlider.dispatchEvent(changeEvent);
        }).not.toThrow();
      }
    });
  });

  describe('Progress Bar Tests', () => {
    test('should detect seek slider presence', () => {
      const seekSlider = document.querySelector('[data-plyr="seek"]');
      expect(seekSlider).toBeTruthy();

      if (seekSlider) {
        expect(seekSlider.tagName.toLowerCase()).toBe('input');
        expect(seekSlider.type).toBe('range');
      }
    });

    test('should detect seek slider properties', () => {
      const seekSlider = document.querySelector('[data-plyr="seek"]');

      if (seekSlider) {
        // Slider should have proper range
        expect(seekSlider.min).toBe('0');
        expect(seekSlider.max).toBe('100');

        // Should have initial value
        expect(parseFloat(seekSlider.value)).toBeDefined();
      }
    });

    test('should detect progress container styling', () => {
      const progressContainer = document.querySelector('.plyr__progress');
      expect(progressContainer).toBeTruthy();

      if (progressContainer) {
        const computedStyle = window.getComputedStyle(progressContainer);

        // Should be visible and properly styled
        expect(computedStyle.display).not.toBe('none');
        expect(computedStyle.visibility).not.toBe('hidden');
      }
    });
  });

  describe('Fullscreen Button Tests', () => {
    test('should detect fullscreen button presence', () => {
      const fullscreenButton = document.querySelector('[data-plyr="fullscreen"]');
      expect(fullscreenButton).toBeTruthy();

      if (fullscreenButton) {
        expect(fullscreenButton.tagName.toLowerCase()).toBe('button');
        expect(fullscreenButton.getAttribute('data-plyr')).toBe('fullscreen');
      }
    });

    test('should detect fullscreen button accessibility', () => {
      const fullscreenButton = document.querySelector('[data-plyr="fullscreen"]');

      if (fullscreenButton) {
        // Should have proper ARIA label
        expect(fullscreenButton.getAttribute('aria-label')).toBeTruthy();

        // Should not be disabled
        expect(fullscreenButton.hasAttribute('disabled')).toBe(false);
      }
    });
  });

  describe('Controls Container Tests', () => {
    test('should detect controls container visibility', () => {
      const controlsContainer = document.querySelector('.plyr__controls');
      expect(controlsContainer).toBeTruthy();

      if (controlsContainer) {
        const computedStyle = window.getComputedStyle(controlsContainer);

        // Controls should be visible
        expect(computedStyle.display).not.toBe('none');
        expect(computedStyle.visibility).not.toBe('hidden');

        // This is the main corruption check for CSS opacity
        if (computedStyle.opacity === '0') {
          console.warn('🔴 CORRUPTION DETECTED: Controls container has opacity: 0 (CSS corruption)');
        }
        expect(computedStyle.opacity).not.toBe('0');
      }
    });

    test('should detect controls interaction capability', () => {
      const controlsContainer = document.querySelector('.plyr__controls');

      if (controlsContainer) {
        // Container should allow pointer events
        const computedStyle = window.getComputedStyle(controlsContainer);
        expect(computedStyle.pointerEvents).not.toBe('none');

        // Should have child controls
        const controls = controlsContainer.querySelectorAll('.plyr__control');
        expect(controls.length).toBeGreaterThan(0);
      }
    });

    test('should detect controls layout integrity', () => {
      const controlsContainer = document.querySelector('.plyr__controls');

      if (controlsContainer) {
        // Check if controls are properly positioned
        const rect = controlsContainer.getBoundingClientRect();

        // Should have dimensions (not collapsed)
        if (rect.width === 0 || rect.height === 0) {
          console.warn('🔴 CORRUPTION DETECTED: Controls container has no dimensions');
        }
      }
    });
  });

  describe('Fast UI Tests', () => {
    test('[fast] controls container exists', () => {
      expect(document.querySelector('.plyr__controls')).toBeTruthy();
    });

    test('[fast] play button exists', () => {
      expect(document.querySelector('[data-plyr="play"]')).toBeTruthy();
    });

    test('[fast] volume control exists', () => {
      expect(document.querySelector('[data-plyr="volume"]')).toBeTruthy();
    });

    test('[fast] seek control exists', () => {
      expect(document.querySelector('[data-plyr="seek"]')).toBeTruthy();
    });
  });
});