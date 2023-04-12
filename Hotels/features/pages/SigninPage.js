class SigninPage {

    // locators of webElements on SignupPage (with in chropath and in const)
    signInLinkLocator = '//button[text()="Sign in"]';

    // functions to intercat with webElements on SignupPage
    async clickSignInLink() {
        await $(this.signInLinkLocator).click();
    }
}

module.exports = SigninPage;