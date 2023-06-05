const { chromium } = require('playwright');

describe('Login Test Cases', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.testyou.in/Login.aspx');
    // Set a default timeout of 10 seconds for all Playwright operations
    page.setDefaultTimeout(20000);
  });

  afterEach(async () => {
    // Teardown code
    await browser.close();
  });

  test('should display error message for invalid credentials', async () => {
    // Test code
    await page.fill('#ctl00_CPHContainer_txtUserLogin', 'invalid_username');
    await page.fill('#ctl00_CPHContainer_txtPassword', 'invalid_username');
    await page.click('#ctl00_CPHContainer_btnLoginn');
    await page.waitForTimeout(3000);
    const errorMessage = await page.textContent('#ctl00_CPHContainer_lblOutput');
    expect(errorMessage).toBe('Userid or Password did Not Match !!');
  });
});
