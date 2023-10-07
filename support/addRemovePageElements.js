class AddRemoveButtonPageElementsLocators {

    get addRemoveElementsLink() {
        return $("//*[@id='content']/ul/li[2]/a");
    }

    async clickOnAddRemoveElementsLink() {
        await(await this.addRemoveElementsLink).click();
    }

    get addElementBtn() {
        return $("//div[@class='example']/button");
    }

    async clickOnAddElementBtn() {
        await(await this.addElementBtn).click();
    }

    get deleteBtn() {
        return $("#elements button[class='added-manually']");
    }

    async clickOnDeleteBtn() {
        await(await this.deleteBtn).click();
    }

}

module.exports = new AddRemoveButtonPageElementsLocators();
