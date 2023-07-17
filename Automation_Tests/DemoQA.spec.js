import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });
let page;

/*SetUP*/

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  const expectedUrlMainPage = 'https://demoqa.com/';
  await page.goto('https://demoqa.com/');
  let actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlMainPage);
});

/*Header Section*/

test('Check Selenium Certification Training Link', async () => {
  const element = await page.getByRole('link', { name: 'Selenium Online Training' });
  const actualUrl = await element.getAttribute('href');
  const expectedUrlElementPage = 'https://www.toolsqa.com/selenium-training/';
  await expect(actualUrl).toBe(expectedUrlElementPage);
});

/*Body Section*/

test('Check Elements Page', async () => {
  const element = await page.locator('.avatar').first();
  await element.click();
  const expectedUrlElementPage = 'https://demoqa.com/elements';
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlElementPage);
});

test('Check Forms Page', async () => {
  const element = await page.locator('div:nth-child(2) > div > .avatar');
  await element.click();
  const expectedUrlElementPage = 'https://demoqa.com/forms';
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlElementPage);
});

test('Check Alerts, Frame & Windows Page', async () => {
  const element = await page.locator('div:nth-child(3) > div > .avatar');
  await element.click();
  const expectedUrlElementPage = 'https://demoqa.com/alertsWindows';
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlElementPage);
});

test('Check Widgets Page', async () => {
  const element = await page.locator('div:nth-child(4) > div > .avatar');
  await element.click();
  const expectedUrlElementPage = 'https://demoqa.com/widgets';
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlElementPage);
});

test('Check Interactions Page', async () => {
  const element = await page.locator('div:nth-child(5) > div > .avatar');
  await element.click();
  const expectedUrlElementPage = 'https://demoqa.com/interaction';
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlElementPage);
});

test('Check Book Store Application Page', async () => {
  const element = await page.locator('div:nth-child(6) > div > .avatar');
  await element.click();
  const expectedUrlElementPage = 'https://demoqa.com/books';
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlElementPage);
});

/*Close Browser*/

test.afterEach(async () => {
  await page.close();
});