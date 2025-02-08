// e2e/firstTest.spec.js
describe('Ecommerce App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should allow a user to log in, search for a product, add it to the cart, and complete checkout', async () => {
    await element(by.id('usernameInput')).typeText('testuser');
    await element(by.id('passwordInput')).typeText('password');
    await element(by.id('loginButton')).tap();
    
    await element(by.id('searchProductButton')).tap();
    await element(by.id('searchInput')).typeText('t-shirt');
    await element(by.id('addToCartButton_1')).tap();
    
    await element(by.id('viewCartButton')).tap();
    await element(by.id('checkoutButton')).tap();
    await element(by.id('makePaymentButton')).tap();
    await element(by.id('confirmPaymentButton')).tap();
    
    // Verify you are redirected back to Home
    await expect(element(by.text('Welcome, testuser!'))).toBeVisible();
  });
});
