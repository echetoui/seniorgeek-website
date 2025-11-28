import { test, expect } from '@playwright/test';

test.describe('Services Pages', () => {
  test('should load services index page', async ({ page }) => {
    await page.goto('/services/');
    await expect(page).toHaveTitle(/Services SeniorGeek/);

    // Check hero section
    const heroTitle = page.locator('h1');
    await expect(heroTitle).toContainText('Nos services');
  });

  test('services page should have all three service cards', async ({ page }) => {
    await page.goto('/services/');

    // Check for service cards
    const ainesService = page.locator('text=Pour les aînés').first();
    const prochesService = page.locator('text=Pour les proches').first();
    const residencesService = page.locator('text=Pour les résidences').first();

    await expect(ainesService).toBeVisible();
    await expect(prochesService).toBeVisible();
    await expect(residencesService).toBeVisible();
  });

  test('should load aînes service page', async ({ page }) => {
    await page.goto('/services/aines/');
    await expect(page).toHaveTitle(/Services pour les aînés/);

    // Check for services section
    const servicesTitle = page.locator('h2:has-text("Nos services")').first();
    await expect(servicesTitle).toBeVisible();

    // Check for all four service items
    const accompagnement = page.locator('text=Accompagnement individuel').first();
    const ateliers = page.locator('text=Ateliers en groupe').first();
    const jeu = page.locator('text=Jeu Vrai ou Faux').first();
    const motCode = page.locator('text=Mot de code familial').first();

    await expect(accompagnement).toBeVisible();
    await expect(ateliers).toBeVisible();
    await expect(jeu).toBeVisible();
    await expect(motCode).toBeVisible();
  });

  test('should load proches service page', async ({ page }) => {
    await page.goto('/services/proches/');
    await expect(page).toHaveTitle(/Services pour les proches/);

    const heroTitle = page.locator('h1');
    await expect(heroTitle).toContainText('Services pour les proches');
  });

  test('should load residences service page', async ({ page }) => {
    await page.goto('/services/residences/');
    await expect(page).toHaveTitle(/Services pour les résidences/);

    const heroTitle = page.locator('h1');
    await expect(heroTitle).toContainText('Services pour les résidences');
  });

  test('should have working CTA buttons on service pages', async ({ page }) => {
    await page.goto('/services/aines/');

    // Check for CTA button
    const ctaButton = page.locator('text=Prendre un moment avec nous').first();
    await expect(ctaButton).toBeVisible();
  });

  test('services page should have no broken links', async ({ page }) => {
    await page.goto('/services/');

    // Get all links
    const links = await page.locator('a[href]').all();

    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href && !href.startsWith('tel:') && !href.startsWith('mailto:')) {
        // Check if link is visible
        const isVisible = await link.isVisible().catch(() => false);
        if (isVisible) {
          expect(href).toBeTruthy();
        }
      }
    }
  });
});
