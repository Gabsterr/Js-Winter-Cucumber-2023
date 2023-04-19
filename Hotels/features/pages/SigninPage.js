class SigninPage {

    // locators of webElements on SignupPage (with in chropath and in const)
    signInLinkLocator = '//button[text()="Sign in"]';
    signInBtnLocator = 'a[data-stid=link-header-account-signin]';
    enterEmailLocator = '#loginFormEmailInput';
    signInContinueBtnLocator = '//button[text()="Continue"]';
    signInContinueBtnError = '#loginFormEmailInput-error';

    // functions to intercat with webElements on SignupPage
    async clickSignInLink() {
        await $(this.signInLinkLocator).click();
    }

    async clickSignInBtn() {
        await $(this.signInBtnLocator).click();
    }

    async enterInvalidEmailSignIn(invalidValue) {
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://www.hotels.com/login?&uurl=e3id%3Dredr%26rurl%3D%2F') === 0) {
                break;
            }
        }
        await $(this.enterEmailLocator).waitForDisplayed();
        await $(this.enterEmailLocator).setValue(invalidValue);
    }

    async clickSignInContinueBtn() {
        await $(this.signInContinueBtnLocator).click();
    }

    async isInvalidEmailErrorDisplayed() {
        await $(this.signInContinueBtnError).isDisplayed();
    }
}

module.exports = SigninPage;