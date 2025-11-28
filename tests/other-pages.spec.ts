import { test, expect } from '@playwright/test';

test.describe('Other Important Pages', () => {
  test('should load about page', async ({ page }) => {
    await page.goto('/a-propos/');
    await expect(page).toHaveTitle(/À propos/);

    // Check for timeline
    const timeline = page.locator('text=Fondation de SeniorGeek').first();
    await expect(timeline).toBeVisible();
  });

  test('should load contact page', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page).toHaveTitle(/Nous contacter/);

    // Check for contact methods
    const phoneContact = page.locator('text=Appel gratuit').first();
    await expect(phoneContact).toBeVisible();
  });

  test('should load fraud detection page', async ({ page }) => {
    await page.goto('/fraudes/');
    await expect(page).toHaveTitle(/Reconnaître les fraudes/);

    // Check for fraud types
    const fraudTitle = page.locator('h2:has-text("Types d\'arnaques courants")').first();
    await expect(fraudTitle).toBeVisible();
  });

  test('should load emergency page', async ({ page }) => {
    await page.goto('/urgence-numerique/');
    await expect(page).toHaveTitle(/Urgence numérique/);

    const servicesTitle = page.locator('h2:has-text("Services d\'urgence disponibles")').first();
    await expect(servicesTitle).toBeVisible();
  });

  test('should load pricing page', async ({ page }) => {
    await page.goto('/tarifs/');
    await expect(page).toHaveTitle(/Tarifs SeniorGeek/);

    // Check for pricing cards
    const accompagnement = page.locator('text=Accompagnement individuel').first();
    await expect(accompagnement).toBeVisible();
  });

  test('should load values page', async ({ page }) => {
    await page.goto('/nos-valeurs/');
    await expect(page).toHaveTitle(/Nos valeurs/);

    const valuesTitle = page.locator('h2:has-text("Nos valeurs")').first();
    await expect(valuesTitle).toBeVisible();
  });

  test('should load partnership page', async ({ page }) => {
    await page.goto('/partenariat/');
    await expect(page).toHaveTitle(/Partenariat/);

    const partnershipTitle = page.locator('h2:has-text("Types de partenariats")').first();
    await expect(partnershipTitle).toBeVisible();
  });

  test('should load who we are page', async ({ page }) => {
    await page.goto('/qui-sommes-nous/');
    await expect(page).toHaveTitle(/Qui sommes-nous/);

    const teamTitle = page.locator('h2:has-text("Notre équipe")').first();
    await expect(teamTitle).toBeVisible();
  });

  test('should load blog index', async ({ page }) => {
    await page.goto('/blog/');
    await expect(page).toHaveTitle(/Blog|Articles/i);
  });

  test('should load specific blog post', async ({ page }) => {
    await page.goto('/blog/reconnaitre-faux-appel-urgence/');
    await expect(page).toHaveTitle(/Comment reconnaître un faux appel/i);
  });
});
