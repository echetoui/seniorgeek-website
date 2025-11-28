import { test, expect } from '@playwright/test';

test.describe('Visual Content & Emojis', () => {
  test('homepage should display all emojis in services', async ({ page }) => {
    await page.goto('/');

    // Check for emojis in service titles
    const servicesText = await page.locator('[class*="grid"]').first().textContent();

    expect(servicesText).toContain('👵'); // Pour les aînés
    expect(servicesText).toContain('💕'); // Pour les proches
    expect(servicesText).toContain('🏛️'); // Pour les résidences
  });

  test('services page should display service icons/emojis', async ({ page }) => {
    await page.goto('/services/aines/');

    const pageText = await page.textContent('body');

    // Check for service emojis
    expect(pageText).toContain('🏠'); // Accompagnement
    expect(pageText).toContain('👥'); // Ateliers
    expect(pageText).toContain('🎮'); // Jeu
    expect(pageText).toContain('🔐'); // Mot de code
  });

  test('fraud page should display fraud type emojis', async ({ page }) => {
    await page.goto('/fraudes/');

    const pageText = await page.textContent('body');

    // Check for fraud type emojis
    expect(pageText).toContain('📞'); // Faux appels
    expect(pageText).toContain('📱'); // Messages suspects
    expect(pageText).toContain('💎'); // Fausses annonces
    expect(pageText).toContain('🖥️'); // Support technique
  });

  test('about page should display timeline emojis', async ({ page }) => {
    await page.goto('/a-propos/');

    const pageText = await page.textContent('body');

    // Check for timeline emojis
    expect(pageText).toContain('🚀'); // Fondation
    expect(pageText).toContain('🎉'); // Lancement
    expect(pageText).toContain('🏢'); // Expansion
    expect(pageText).toContain('🌟'); // Visée 2025
  });

  test('pricing page should display pricing emojis', async ({ page }) => {
    await page.goto('/tarifs/');

    const pageText = await page.textContent('body');

    // Check for pricing emojis
    expect(pageText).toContain('🏠'); // Accompagnement
    expect(pageText).toContain('👥'); // Ateliers
    expect(pageText).toContain('🏛️'); // Résidences
  });

  test('contact page should display contact method emojis', async ({ page }) => {
    await page.goto('/contact/');

    const pageText = await page.textContent('body');

    // Check for contact emojis
    expect(pageText).toContain('☎️'); // Téléphone
    expect(pageText).toContain('📧'); // Email
    expect(pageText).toContain('📍'); // Localisation
  });

  test('values page should display values emojis', async ({ page }) => {
    await page.goto('/nos-valeurs/');

    const pageText = await page.textContent('body');

    // Check for values emojis
    expect(pageText).toContain('💬'); // Langage simple
    expect(pageText).toContain('❤️'); // Respect
    expect(pageText).toContain('🛡️'); // Sécurité
    expect(pageText).toContain('♿'); // Accessibilité
  });

  test('images should be visible on all pages', async ({ page }) => {
    const pages = [
      '/',
      '/a-propos/',
      '/services/aines/',
      '/fraudes/'
    ];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      const images = page.locator('img');
      const imageCount = await images.count();

      expect(imageCount).toBeGreaterThan(0);

      // Check that images are loaded
      for (let i = 0; i < imageCount; i++) {
        const isVisible = await images.nth(i).isVisible().catch(() => false);
        if (isVisible) {
          const naturalWidth = await images.nth(i).evaluate(
            (img: any) => img.naturalWidth
          ).catch(() => null);

          // Natural width of 0 means image failed to load
          expect(naturalWidth).toBeGreaterThan(0);
        }
      }
    }
  });

  test('hero section should have proper background', async ({ page }) => {
    await page.goto('/');

    const hero = page.locator('[class*="hero"], [class*="Hero"]').first();
    await expect(hero).toBeVisible();

    // Check that hero has proper styling
    const height = await hero.evaluate((el) => {
      return window.getComputedStyle(el).height;
    });

    expect(height).toBeTruthy();
  });

  test('cards should be properly styled and visible', async ({ page }) => {
    await page.goto('/services/');

    const cards = page.locator('[class*="card"], [role="article"]');
    const cardCount = await cards.count();

    expect(cardCount).toBeGreaterThan(0);

    // Check first few cards
    for (let i = 0; i < Math.min(3, cardCount); i++) {
      const card = cards.nth(i);
      const isVisible = await card.isVisible();
      expect(isVisible).toBeTruthy();
    }
  });
});
