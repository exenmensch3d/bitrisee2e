describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should add item to shopping list', async () => {
    await element(by.id('textFeld')).typeText("Bananas");
    await element(by.id('submitKnopf')).tap();
    await element(by.id('textFeld')).typeText("Milk");
    await element(by.id('submitKnopf')).tap();
    await element(by.id('textFeld')).typeText("Coffee");
    await element(by.id('submitKnopf')).tap();
    await element(by.id('textFeld')).typeText("Beer");
    await element(by.id('submitKnopf')).tap();


    await expect(element(by.text('Bananas'))).toBeVisible();
    await expect(element(by.text('Beer'))).toBeVisible();
  });


});