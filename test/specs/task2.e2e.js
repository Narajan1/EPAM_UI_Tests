const dynamicLoadedPageElements = require("../../support/dynLoadPageElements")
const constants = require("../../support/constants")
const assert = require("assert")
const forgotPasswordPageElements = require("../../support/forgotPasswordPageElements")

describe('Basic Commands', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('The Internet');
    })

    it('should appear Hello World /using waitForDisplayed/', async () => {
        await dynamicLoadedPageElements.clickOnDynamicLoadingLink();
        await dynamicLoadedPageElements.clickOnExample1Link();
        await dynamicLoadedPageElements.clickOnStartBtn();
        await dynamicLoadedPageElements.helloWorldText.waitForDisplayed();
        assert.equal(await dynamicLoadedPageElements.getHWText(), constants.helloworldTxt);
    })

    it('should wait element to appear, then click /using waitFor/', async () => {
        await dynamicLoadedPageElements.clickOnDynamicLoadingLink();
        await dynamicLoadedPageElements.clickOnExample1Link();
        await dynamicLoadedPageElements.clickOnStartBtn();

        await dynamicLoadedPageElements.helloWorldText.waitUntil(async function () {
            return (await this.getText()) === constants.helloworldTxt;
        }, {
            timeout: 20000,
            timeoutMsg: 'expected text does not appeared'
        })

        await expect(dynamicLoadedPageElements.elementalSeleniumLink).toBeClickable();
        await dynamicLoadedPageElements.clickOnElementalSeleniumLink()
    });

    it('should input value in the email field /using setValue/', async () => {
        await forgotPasswordPageElements.clickOnforgotPasswordLink();
        await forgotPasswordPageElements.fillEmailField(constants.inputTxt);
        await expect(forgotPasswordPageElements.emailField).toHaveValue(constants.inputTxt, { ignoreCase: true });
        //this line is not necessary
        await forgotPasswordPageElements.clickOnRetrievePasswordBtn();
    })

    it('should input value in the email field, then add additional value /using addValue/', async () => {
        await forgotPasswordPageElements.clickOnforgotPasswordLink();
        await forgotPasswordPageElements.fillEmailField(constants.inputTxt);
        await forgotPasswordPageElements.addAdditionalTxt(constants.additionalTxt);
        await expect(forgotPasswordPageElements.emailField).toHaveValue(constants.inputTxt + "" + constants.additionalTxt);
        //this line is not necessary
        await forgotPasswordPageElements.clickOnRetrievePasswordBtn();
    })
})