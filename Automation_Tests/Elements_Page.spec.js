const { test, expect } = require('@playwright/test');
import { constants } from './Constants.spec';


/*Reuse page object for all tests*/
test.describe.configure({ mode: 'serial' });
let page;

/*SetUP before all tests*/
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://demoqa.com/');
  let actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlMainPage);
});

/*Elements page -> Elements section -> Text Box sub-section */

test('open Elements Page', async () => {
  const element = await page.waitForSelector('.avatar.mx-auto.white');
  await element.click();
  const actualUrl = await page.url();
  await expect(actualUrl).toBe(expectedUrlElementPage);
});

test('open Text Box Section', async () => {
  const textBox = await page.getByRole('list').getByText('Text Box');
  await expect(textBox).not.toBeNull();
  await textBox.click();
});

test('fill FullName field in Text Box sub-section', async () => {
  const fullName = await page.getByPlaceholder('Full Name');
  await expect(fullName).not.toBeNull();
  await fullName.click();
  fullName.fill("Something New");
});

test('fill Email field in Text Box sub-section', async () => {
  const email = await page.getByPlaceholder('name@example.com');
  await expect(email).not.toBeNull();
  await email.click();
  email.fill("something.new@gmail.com");
});

test('fill CurrentAdress field in Text Box sub-section', async () => {
  const currentAdress = await page.getByPlaceholder('Current Address');
  await expect(currentAdress).not.toBeNull();
  await currentAdress.click();
  currentAdress.fill("Alabama Night st 51");
});

test('fill Permanent Adress field in Text Box sub-section', async () => {
  const permanentAdress = await page.locator('#permanentAddress-wrapper #permanentAddress');
  await expect(permanentAdress).not.toBeNull();
  await permanentAdress.click();
  permanentAdress.fill("London Something st 67");

  const submit = await page.getByRole('button', { name: 'Submit' });
  await expect(submit).not.toBeNull();
  await submit.click();
});

/*Elements page -> Elements section -> Check Box sub-section */

test('fill Permanent Adress field in Text Box sub-section', async () => {
  await page.goto('https://demoqa.com/checkbox');
  await page.locator('li').filter({ hasText: 'Check Box' }).click();
  await page.getByLabel('Expand all').click();
  await page.getByText('Notes').click();
  await page.getByText('Angular').click();
  await page.getByText('Word File.doc').click();
});

/*Elements page -> Elements section -> Radio Button sub-section */

/*Elements page -> Elements section -> Web Tables sub-section */

/*Elements page -> Elements section -> Buttons sub-section */

/*Elements page -> Elements section -> Links sub-section */

/*Elements page -> Elements section -> Broken Links - Images sub-section */

/*Elements page -> Elements section -> Upload and Download sub-section */

/*Elements page -> Elements section -> Dynamic Properties */

/*Elements page -> Forms section -> Practice Form sub-section */

/*Elements page -> Alerts, Frame & Windows section -> Browser Windows sub-section */

/*Elements page -> Alerts, Frame & Windows section -> Alerts sub-section */

/*Elements page -> Alerts, Frame & Windows section -> Frames sub-section */

/*Elements page -> Alerts, Frame & Windows section -> Nested Frames sub-section */

/*Elements page -> Alerts, Frame & Windows section -> Modal Dialogs sub-section */



/*Close browser*/
test.afterAll(async () => {
  await page.close();
});