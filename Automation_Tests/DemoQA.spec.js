import { test, expect } from '@playwright/test';
import constants from './Constants.spec';

test.describe.configure({ mode: 'serial' });
let page;

/*SetUP*/

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://demoqa.com/');
  let actualUrl = await page.url();
  await expect(actualUrl).toBe(constants.expectedUrlMainPage);
});

/*Header Section*/

test('Check Selenium Certification Training Link', async () => {
  const element = await page.getByRole('link', { name: 'Selenium Online Training' });
  const actualUrl = await element.getAttribute('href');
  await expect(actualUrl).toBe(constants.expectedUrlSeleniumCertificationTrainingLinkPage);
});

/*Body Section*/

test('Check Elements Page', async () => {
  const element = await page.locator(constants.locatorElementsPage).first();
  await element.click();
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(constants.expectedUrlElementPage);
});

test('Check Forms Page', async () => {
  const element = await page.locator(constants.locatorFormsPage);
  await element.click();
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(constants.expectedUrlFormsPage);
});

test('Check Alerts, Frame & Windows Page', async () => {
  const element = await page.locator(constants.locatorAlertsFrameWindowsPage);
  await element.click();
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(constants.expectedUrlAlertsFrameWindowsPage);
});

test('Check Widgets Page', async () => {
  const element = await page.locator(constants.locatorWidgetPage);
  await element.click();
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(constants.expectedUrlWidgetPage);
});

test('Check Interactions Page', async () => {
  const element = await page.locator(constants.locatorInteractionstPage);
  await element.click();
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(constants.expectedUrlInteractionstPage);
});

test('Check Book Store Application Page', async () => {
  const element = await page.locator(constants.locatorBookStoreApplicationPage);
  await element.click();
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(constants.expectedUrlBookStoreApplicationPage);
});

/*Close Browser*/

test.afterEach(async () => {
  await page.close();
});