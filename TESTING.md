# SeniorGeek Website Testing Guide

This document describes the automated testing setup for the SeniorGeek website using Playwright.

## Setup

### Installation

The project uses Playwright for end-to-end testing:

```bash
npm install -D @playwright/test
```

### Configuration

Playwright is configured in `playwright.config.ts` with:
- **Browsers**: Chromium, Firefox, and WebKit
- **Base URL**: http://localhost:3000
- **Reporter**: HTML reporter for detailed test reports
- **Web Server**: Automatically starts `npm run dev` server for tests

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm test:ui
```

### Debug tests step-by-step
```bash
npm test:debug
```

### View test report
```bash
npm test:report
```

## Test Structure

### Test Files

1. **homepage.spec.ts** - Homepage functionality tests
   - Page load and title verification
   - Hero section content
   - Services section visibility
   - Navigation links
   - Responsive design (mobile)
   - Values section with emojis

2. **services.spec.ts** - Services pages tests
   - Services index page loading
   - All three service cards (Aînés, Proches, Résidences)
   - Individual service page loads
   - CTA buttons
   - Link validation

3. **other-pages.spec.ts** - Other important pages
   - About page (/a-propos/)
   - Contact page
   - Fraud detection page
   - Emergency page
   - Pricing page
   - Values page
   - Partnership page
   - Who we are page
   - Blog pages

4. **accessibility.spec.ts** - Accessibility compliance tests
   - Heading hierarchy (H1, H2 tags)
   - Image alt text
   - Color contrast
   - Keyboard navigation
   - Button accessibility
   - Form labels
   - Focus management
   - Navigation structure

5. **visual-content.spec.ts** - Visual and emoji tests
   - Service emojis (👵💕🏛️)
   - Fraud type emojis (📞📱💎🖥️)
   - Timeline emojis (🚀🎉🏢🌟)
   - Contact method emojis (☎️📧📍)
   - Values emojis (💬❤️🛡️♿)
   - Image visibility and loading
   - Card styling and visibility

## Test Coverage

The test suite covers:

- ✅ Page Loading & Navigation
- ✅ Content Visibility
- ✅ Responsive Design
- ✅ Accessibility Standards
- ✅ Emoji Display
- ✅ Image Loading
- ✅ Link Validation
- ✅ Keyboard Navigation
- ✅ Form Elements
- ✅ CTA Buttons

## Test Results

Test results are generated in:
- HTML Report: `playwright-report/index.html`
- Console output with pass/fail status

## CI/CD Integration

For continuous integration:

```bash
npm test -- --headed false
```

This runs tests headless (without opening browser windows), suitable for CI/CD pipelines.

## Debugging

To debug a specific test:

```bash
npx playwright test tests/homepage.spec.ts --debug
```

## Best Practices

1. **Selectors**: Use semantic selectors (labels, text content) when possible
2. **Wait Times**: Tests automatically wait for elements
3. **Assertions**: Use `expect()` for clear test assertions
4. **Screenshots**: Use `await page.screenshot()` to capture test failures
5. **Isolation**: Each test is independent and can run in any order

## Common Commands

```bash
# Run specific test file
npm test tests/homepage.spec.ts

# Run tests matching pattern
npm test -- --grep "should load"

# Run tests in headed mode (see browser)
npm test -- --headed

# Run single test
npm test -- -g "should load homepage successfully"
```

## Troubleshooting

### Tests timeout
- Increase timeout in `playwright.config.ts`
- Check if dev server is running
- Verify network connectivity

### Element not found
- Check selector syntax
- Wait for element with `page.waitForSelector()`
- Use `await page.goto()` to ensure page is loaded

### Failed assertions
- Review test expectations
- Check if content has changed
- Update test selectors if needed

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Test Assertions](https://playwright.dev/docs/assertions)
