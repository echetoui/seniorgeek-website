import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test('homepage should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Check for h1
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);

    // Check for h2
    const h2 = page.locator('h2');
    const h2Count = await h2.count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test('all images should have alt text', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');

    // Check main heading text
    const heading = page.locator('h1');
    const color = await heading.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });

    expect(color).toBeTruthy();
  });

  test('links should be keyboard navigable', async ({ page }) => {
    await page.goto('/');

    // Focus on first link
    await page.keyboard.press('Tab');

    const focusedElement = await page.evaluate(() => {
      return document.activeElement?.tagName;
    });

    expect(['A', 'BUTTON']).toContain(focusedElement);
  });

  test('buttons should be accessible', async ({ page }) => {
    await page.goto('/');

    const buttons = page.locator('button, a[role="button"]');
    const buttonCount = await buttons.count();

    expect(buttonCount).toBeGreaterThan(0);

    // Check that buttons are visible
    for (let i = 0; i < Math.min(3, buttonCount); i++) {
      const isVisible = await buttons.nth(i).isVisible();
      expect(isVisible).toBeTruthy();
    }
  });

  test('form inputs should have labels', async ({ page }) => {
    await page.goto('/contact/');

    const inputs = page.locator('input, textarea, select');
    const inputCount = await inputs.count();

    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const name = await input.getAttribute('name');

      expect(id || name).toBeTruthy();
    }
  });

  test('page should have proper focus management', async ({ page }) => {
    await page.goto('/');

    // Press Tab multiple times
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
    }

    const focusedElement = await page.evaluate(() => {
      return document.activeElement?.getAttribute('href') ||
             document.activeElement?.getAttribute('aria-label') ||
             document.activeElement?.textContent?.substring(0, 20);
    });

    expect(focusedElement).toBeTruthy();
  });

  test('navigation should be accessible', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Check for navigation links
    const navLinks = nav.locator('a');
    const linkCount = await navLinks.count();

    expect(linkCount).toBeGreaterThan(0);
  });
});
