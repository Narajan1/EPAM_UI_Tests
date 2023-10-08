class DynamicLoadedPageElements{
    get dynamicLoadingLink() {
        return $("#content > ul > li:nth-child(14) > a");
    }

    async clickOnDynamicLoadingLink() {
        await(await this.dynamicLoadingLink).click();
    }

    get example1Link() {
        return $("//a[text() = 'Example 1: Element on page that is hidden' ]");
    }

    async clickOnExample1Link() {
        await(await this.example1Link).click();
    }

    get startBtn() {
        return $("//button[text()='Start']");
    }

    async clickOnStartBtn() {
        await(await this.startBtn).click();
    }

    get helloWorldText() {
        return $("//h4[text()='Hello World!']");
    }

    async getHWText() {
        return await(await this.helloWorldText).getText();
    }

    get elementalSeleniumLink() {
        return $("//a[text() = 'Elemental Selenium']");
    }

    async clickOnElementalSeleniumLink() {
        await(await this.elementalSeleniumLink).click();
    }

}

module.exports = new DynamicLoadedPageElements()