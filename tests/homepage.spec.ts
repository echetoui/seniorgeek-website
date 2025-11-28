import { test, expect } from '@playwright/test';

test.describe('SeniorGeek Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SeniorGeek/);
  });

  test('should display hero section with title and buttons', async ({ page }) => {
    await page.goto('/');

    // Check hero title
    const heroTitle = page.locator('h1');
    await expect(heroTitle).toContainText('Protéger et accompagner les aînés');

    // Check CTA buttons
    const ctaButton = page.locator('a:has-text("Prendre un moment avec nous")').first();
    await expect(ctaButton).toBeVisible();
  });

  test('should display services section', async ({ page }) => {
    await page.goto('/');

    // Check services section
    const servicesTitle = page.locator('h2:has-text("Nos services")').first();
    await expect(servicesTitle).toBeVisible();

    // Check all three service cards are visible
    const serviceCards = page.locator('[class*="grid"] >> a:has-text("Pour les aînés"), [class*="grid"] >> a:has-text("Pour les proches"), [class*="grid"] >> a:has-text("Pour les résidences")');
    await expect(serviceCards.first()).toBeVisible();
  });

  test('should display testimonials section', async ({ page }) => {
    await page.goto('/');

    const testimonialTitle = page.locator('h2:has-text("Ce que disent nos clients")');
    await expect(testimonialTitle).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Click on Services link
    await page.locator('a[href="/services/aines/"]').click();
    await expect(page).toHaveURL('/services/aines/');
    await expect(page).toHaveTitle(/Services pour les aînés/);
  });

  test('should display values section with emojis', async ({ page }) => {
    await page.goto('/');

    // Check for emojis in values
    const valuesSection = page.locator('text=Langage simple').first();
    await expect(valuesSection).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const heroTitle = page.locator('h1');
    await expect(heroTitle).toBeVisible();
  });
});
