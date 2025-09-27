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

});