import { test, expect } from '@playwright/test';

test.describe('Control Interactions - Baseline Tests', () => {

  test('video element exists and has basic properties', async ({ page }) => {
    // Navigate to demo page
    await page.goto('/');

    // Wait for video element
    await page.waitForSelector('video', { timeout: 5000 });

    // Get the video element
    const video = page.locator('video').first();

    // Check basic video properties
    const paused = await video.evaluate(el => el.paused);
    const volume = await video.evaluate(el => el.volume);

    expect(typeof paused).toBe('boolean');
    expect(typeof volume).toBe('number');
    expect(volume).toBeGreaterThanOrEqual(0);
    expect(volume).toBeLessThanOrEqual(1);
  });

  test('Volume corruption verification - RED PHASE', async ({ page }) => {
    // This test verifies that the volume corruption exists in the built library
    // It should FAIL because the corruption makes volume return a string instead of a number
    await page.goto('/');
    await page.waitForSelector('video', { timeout: 5000 });

    // Load Plyr library directly into page context to test the corruption
    const result = await page.evaluate(() => {
      // Create a script tag to load our corrupted Plyr library
      const script = document.createElement('script');
      script.src = '/dist/plyr.js';  // Our corrupted build
      document.head.appendChild(script);

      return new Promise((resolve) => {
        script.onload = () => {
          try {
            const video = document.querySelector('video');
            const player = new window.Plyr(video);

            // Test the corrupted volume property
            const volumeValue = player.volume;

            resolve({
              success: true,
              volumeValue: volumeValue,
              volumeType: typeof volumeValue,
              shouldBeNumber: true,
              actuallyIsString: typeof volumeValue === 'string'
            });
          } catch (error) {
            resolve({
              success: false,
              error: error.message
            });
          }
        };

        script.onerror = () => resolve({ success: false, error: 'Failed to load Plyr library' });
      });
    });

    console.log('Corruption verification result:', result);

    if (result.success) {
      console.log(`🔴 RED PHASE: Volume should be number but is ${result.volumeType}: "${result.volumeValue}"`);

      // This assertion should FAIL due to our corruption (RED phase)
      // Volume should be a number between 0-1, but our corruption makes it return "BROKEN_VOLUME" (string)
      expect(result.volumeType).toBe('number');  // This will FAIL - corruption makes it string
      expect(typeof result.volumeValue).toBe('number');  // This will FAIL - corruption makes it string
      expect(result.volumeValue).toBeGreaterThanOrEqual(0);  // This will FAIL - "BROKEN_VOLUME" is not >= 0
      expect(result.volumeValue).toBeLessThanOrEqual(1);  // This will FAIL - "BROKEN_VOLUME" is not <= 1
    } else {
      throw new Error(`Could not test corruption: ${result.error}`);
    }
  });

  test('video volume should be settable through Plyr API', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('video', { timeout: 5000 });

    // Wait a bit longer for Plyr to initialize fully
    await page.waitForTimeout(2000);

    // Try to set volume through Plyr API (this will trigger our corruption)
    const result = await page.evaluate(() => {
      // Find the Plyr instance on the page
      const video = document.querySelector('video');

      // Check if video has been wrapped by Plyr
      if (video && video.plyr) {
        // Use Plyr API to set volume
        video.plyr.volume = 0.7;

        // Return both Plyr's volume and the actual video volume
        return {
          plyrVolume: video.plyr.volume,
          actualVolume: video.volume,
          hasPlyr: true
        };
      }

      return {
        hasPlyr: false,
        actualVolume: video ? video.volume : null
      };
    });

    // If Plyr is working correctly, both volumes should match and be numbers
    if (result.hasPlyr) {
      expect(typeof result.actualVolume).toBe('number');
      expect(result.actualVolume).toBeCloseTo(0.7, 1);
    } else {
      // Fallback test if Plyr isn't initialized
      expect(typeof result.actualVolume).toBe('number');
    }
  });

});