const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' });
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  const expectedUrlMainPage = 'https://demoqa.com/';
  await page.goto('https://demoqa.com/');
  let actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlMainPage);
});


test('open Elements Page', async () => {
  const element = await page.waitForSelector('.avatar.mx-auto.white');
  await element.click();
  const expectedUrlElementPage = 'https://demoqa.com/elements';
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlElementPage);
});

test('open Text Box Section', async () => {
  const textBox = await page.getByRole('list').getByText('Text Box');
  await expect(textBox).not.toBeNull();
  await textBox.click();
});

test('fill FullName Field', async () => {
  const fullName = await page.getByPlaceholder('Full Name');
  await expect(fullName).not.toBeNull();
  await fullName.click();
  fullName.fill("Something New");
});

test('fill Email Field', async () => {
  const email = await page.getByPlaceholder('name@example.com');
  await expect(email).not.toBeNull();
  await email.click();
  email.fill("something.new@gmail.com");
});

test('fill CurrentAdress Field', async () => {
  const currentAdress = await page.getByPlaceholder('Current Address');
  await expect(currentAdress).not.toBeNull();
  await currentAdress.click();
  currentAdress.fill("Alabama Night st 51");
});

test('fill Permanent Adress Field', async () => {
  const permanentAdress = await page.locator('#permanentAddress-wrapper #permanentAddress');
  await expect(permanentAdress).not.toBeNull();
  await permanentAdress.click();
  permanentAdress.fill("London Something st 67");

  const submit = await page.getByRole('button', { name: 'Submit' });
  await expect(submit).not.toBeNull();
  await submit.click();
});

test.afterAll(async () => {
  await page.close();
});