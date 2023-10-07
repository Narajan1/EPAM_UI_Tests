class LoginPageElementsLocators {

    get formAuthenticationLink() {
        return $("#content > ul > li:nth-child(21) > a");
    }

    async clickOnFormAuthenticationLink() {
        await (await this.formAuthenticationLink).click();
    }

    get loginPageMsg() {
        return $(".example h2");
    }

    get username() {
        return $("#username");
    }

    async setUsername(u_name) {
        await(await this.username).setValue(u_name);
    }

    get password() {
        return $("#password");
    }

    async setPassword(pass) {
        await(await this.password).setValue(pass);
    }
s
    get LoginBtn() {
        return $("//button[@type = 'submit']");
    }

    async clickOnLoginBtn() {
        await(await this.LoginBtn).click();
    }

    get successMsg() {
        return $("//div[@class = 'flash success']");
    }

    get errorMsg() {
        return $("//div[@class = 'flash error']");
    }

    /*async getMsg() {
        return await(await this.errorMsg).getText();
    }*/


    
}
module.exports = new LoginPageElementsLocators();

