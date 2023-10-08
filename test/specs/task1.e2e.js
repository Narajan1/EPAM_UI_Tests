const loginPageElement = require("../../support/loginPageElements")
const credentials = require("../../support/constants")
const addRemovePageElements = require("../../support/addRemovePageElements")

describe('Task 1', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('The Internet');
    })

    it('should login with valid credentials', async () => {
        await loginPageElement.clickOnFormAuthenticationLink();
        await expect(loginPageElement.loginPageMsg).toHaveText("Login Page");
        await loginPageElement.setUsername(credentials.validUsername);
        await loginPageElement.setPassword(credentials.validPassword);
        await loginPageElement.clickOnLoginBtn();
        await expect(loginPageElement.successMsg).toBeExisting();
    })

    it('should not login with invalid credentials', async () => {
        await loginPageElement.clickOnFormAuthenticationLink();
        await expect(loginPageElement.loginPageMsg).toHaveText("Login Page");
        await loginPageElement.setUsername(credentials.invalidUsename);
        await loginPageElement.setPassword(credentials.invalidPassword);
        await loginPageElement.clickOnLoginBtn();
        await expect(loginPageElement.errorMsg).toBeDisplayed();
    })

    it('should be added Delete btn after clicking on the Add Element button', async () => {
        await addRemovePageElements.clickOnAddRemoveElementsLink();
        await expect(addRemovePageElements.addElementBtn).toBeClickable();
        await addRemovePageElements.clickOnAddElementBtn();
        await expect(addRemovePageElements.deleteBtn).toBePresent();
    })

    it('should be deleted Delete btn after clicking on it', async () => {
        await addRemovePageElements.clickOnAddRemoveElementsLink();
        await expect(addRemovePageElements.addElementBtn).toBeClickable();
        await addRemovePageElements.clickOnAddElementBtn();
        await expect(addRemovePageElements.deleteBtn).toBePresent();
        await addRemovePageElements.clickOnDeleteBtn();
        await expect(addRemovePageElements.deleteBtn).not.toBeExisting();
    })
})

