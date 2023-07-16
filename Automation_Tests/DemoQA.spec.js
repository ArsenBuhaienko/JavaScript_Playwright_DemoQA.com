const { test, expect } = require('@playwright/test');


test.beforeEach('openMainPage', async ({ page }) => {
  const expectedUrlMainPage = 'https://demoqa.com/';
  await page.goto('https://demoqa.com/');
  let actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlMainPage);
});


test('openElementspage', async ({ page }) => {
  const expectedUrlElementPage = 'https://demoqa.com/elements';
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlElementPage);

  const element = await page.waitForSelector('.avatar.mx-auto.white');
  await element.click();
});

test('openTextBoxSection', async ({ page }) => {
  const textBox = await page.$('xpath=/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/ul/li[1]');
  await expect(textBox).not.toBeNull();
  await textBox.click();
});

test('fillFullNameField', async ({ page }) => {
  const fullName = await page.$('xpath=/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[1]/div[2]/input');
  await expect(fullName).not.toBeNull();
  await fullName.click();
  fullName.fill("Something New");
});

test('fillEmailField', async ({ page }) => {
  const email = await page.$('xpath=/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[2]/div[2]/input');
  await expect(email).not.toBeNull();
  await email.click();
  email.fill("something.new@gmail.com");
});

test('fillCurrentAdressField', async ({ page }) => {
  const currentAdress = await page.$('xpath=/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[3]/div[2]/textarea');
  await expect(currentAdress).not.toBeNull();
  await currentAdress.click();
  currentAdress.fill("Alabama Night st 51");
});

test('fillPermanentAdressfield', async ({ page }) => {
  const permanentAdress = await page.$('xpath=/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[4]/div[2]/textarea');
  await expect(permanentAdress).not.toBeNull();
  await permanentAdress.click();
  permanentAdress.fill("London Something st 67");

  const submit = await page.$('xpath=/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[5]/div/button');
  await expect(submit).not.toBeNull();
  await submit.click();

await page.waitForTimeout(5000);
});

