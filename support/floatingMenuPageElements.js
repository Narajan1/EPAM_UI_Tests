class FloatingMenuElements {

    get floatingMenuLink() {
        return $("//*[@id='content']/ul/li[19]/a");
    }

    async clickOnFloatingMenuLink() {
        await(await this.floatingMenuLink).click();
    }

    get homeLink() {
        return $("//a[text()='Home']");
    }
}

module.exports = new FloatingMenuElements()