class ForgotPasswordPageElements{

    get forgotPasswordLink() {
        return $("#content > ul > li:nth-child(20) > a");
    }

    async clickOnforgotPasswordLink() {
        await(await this.forgotPasswordLink).click();
    }

    get emailField() {
        return $("#email");
    }

    async fillEmailField(txt) {
        await(await this.emailField).setValue(txt);
    }

    get retrievePasswordBtn() {
        return $("#form_submit");
    }

    async clickOnRetrievePasswordBtn() {
        await(await this.retrievePasswordBtn).click();
    }

    async addAdditionalTxt(txt) {
        await(await this.emailField).addValue(txt);
    }
}

module.exports = new ForgotPasswordPageElements()