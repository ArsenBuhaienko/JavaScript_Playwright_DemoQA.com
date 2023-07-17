import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('svg').first().click();
  await page.getByText('Check Box').click();
  await page.locator('#tree-node').getByRole('img').nth(3).click();
});