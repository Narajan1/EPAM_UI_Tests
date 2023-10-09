const dynamicLoadedPageElements = require("../../support/dynLoadPageElements")
const floatingMenuElements = require("../../support/floatingMenuPageElements")
const constants = require("../../support/constants")
const assert = require("assert")

describe("Javascript on the page", () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('The Internet');
    })

    it("should change the header /using execute/", async () => {
        //await browser.pause(2000);
        const header = await $(".heading")
        await browser.execute(() => {
            document.querySelector(`.heading`).textContent = "No War!!!";
        });
        //await browser.pause(2000);
        assert.equal(await header.getText(), "No War!!!");
    })

    it('should wait element to appear, then click /using waitUntil/', async () => {
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

    it("should open new tab by performing Ctrl click", async () => {

        await floatingMenuElements.clickOnFloatingMenuLink();
        const ctlClick = '\uE009';  
        browser.performActions([
            {
            actions: [{ type: 'pointer', value: ctlClick }],
            id: 'press',
            type: 'pointer',
            },
        ]);

        await floatingMenuElements.homeLink.click();

        browser.performActions([
            {
            actions: [{ type: 'pointer', value: ctlClick }],
            id: 'release',
            type: 'pointer',
            },
        ]);
    })
})