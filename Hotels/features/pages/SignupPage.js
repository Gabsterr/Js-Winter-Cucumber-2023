class SignupPage {

    // locators of webElements on SignupPage (with in chropath and in const)
    signupLinkLocator = '=Sign up, it\'s free'; //  //a[text()='Link text']  const webElement = await $('=Link text');
    enterInvalidEmailLocator = '#signupFormEmailInput'; //#idValue
    continueBtnLocator = '#signupFormSubmitButton';
    signupErrorMsgLocator = 'div=Enter a valid email.'; //  //tagName[text() = 'text value']
    signupContinueBtn = 'button=Continue';
    termsConditionsLocator = 'a[href*=conditions]';
    termsConditionsNewTab = 'h1=TERMS OF SERVICE';
    lastRevisedTextLocator = 'span=Last revised: 01/01/23';
    privacyStatementLocator = 'a=Privacy Statement ';
    prvcyStmtNewTab = 'span=You give us the information';
    lastUpdatedDateLocator = 'p=Last Updated: 20 December, 2022';

    // functions to intercat with webElements on SignupPage

    async clickSignupLink() {
        await $(this.signupLinkLocator).click();
    }

    async enterInvalidEmail(invalidValue) {
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://www.hotels.com/signup?&uurl=e3id%3Dredr%26rurl%3D%2F') === 0) {
                break;                  
            }
        }
        await $(this.enterInvalidEmailLocator).waitForDisplayed();
        await $(this.enterInvalidEmailLocator).setValue(invalidValue);
    }

    async clickContinueBtn() {
        await $(this.continueBtnLocator).click();
    }

    async IsSignupErrorMsgDisplayed() {
        await $(this.signupErrorMsgLocator).waitForDisplayed();
        return await $(this.signupErrorMsgLocator).isDisplayed();
    }

    async IsSignupContinueBtnEnabled() {
        await $(this.signupContinueBtn).waitForDisplayed();
        return await $(this.signupContinueBtn).isEnabled();

    }

    async clickTermsConditionsLink() {
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://www.hotels.com/signup?&uurl=e3id%3Dredr%26rurl%3D%2F') === 0) {
                break;                  
            }
        }
        await $(this.termsConditionsLocator).click();

    }
   
    async isTermsConditionsInNewTab() { 
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://www.hotels.com/lp/b/terms-of-service') === 0) {
                break;                  
            }
        }
        await $(this.termsConditionsNewTab).waitForDisplayed();
        return await $(this.termsConditionsNewTab).isDisplayed();

    }
    async lastRevisedText() {   //(expected format: MM/dd/yy) Last revised: 01/01/23
        await $(this.lastRevisedTextLocator).isDisplayed();
        const lastRevisedTextValue = await $(this.lastRevisedTextLocator).getText(); //Last revised: 01/01/23
        await lastRevisedTextValue.splice(0,13,0);
   
    }

    async clickPrivacyStatementLink() {
        await $(this.privacyStatementLocator).click();
   }
    
   async isPrvcyStmtOpeningNewTab() {
    const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://www.hotels.com/customer_care/privacy.html?currency=USD&eapid=1&locale=en_US&pos=HCOM_US&siteid=300000001&tpid=3001') === 0) {
                break;                  
            }
        }
        await $(this.prvcyStmtNewTab).waitForDisplayed();
        return await $(this.prvcyStmtNewTab).isDisplayed();
}

async lastUpdatedDateFormat() {  // (expected format: dd MMMM, yyyy)
    await $(this.lastUpdatedDateLocator).isDisplayed();

}

module.exports = SignupPage;