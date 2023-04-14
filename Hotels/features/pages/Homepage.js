
class Homepage {

    // locators of webElements on SignupPage (with in chropath and in const)
    englishLocator = '//div[text()="English"]';
    languageDropdown = '#language-selector';
    espanolDropdown = '//option[text()="Español (Estados Unidos)"]';
    saveLanguageBtn = '//button[text()="Save"]';
    espanolLocator = '//div[text()="Español"]';
    englishDropdown = '//option[text()="English (United States)"]';
    guardarLanguageBtn = '//button[text()="Guardar"]';
    listPropertyLink = '//div[text()="List your property"]';
    whatWouldYouLikeToListLink = '//p[text()="What would you like to list?"]';

    // functions to intercat with webElements on SignupPage

    
    async clickEnglishLink() {
        await $(this.englishLocator).click();
    }

    async clickEspanolDropdown() {
        const allHandles = await browser.getWindowHandles();
        console.log(allHandles);
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://www.hotels.com/?pwaDialog=disp-settings-picker') === 0) {
                break;
            }
            await $(this.languageDropdown).click();
            await $(this.languageDropdown).isDisplayed();
            await $(this.espanolDropdown).click();
        }
    }

    async clickSaveLanguage() {
        await $(this.saveLanguageBtn).click();
    }

    async isEspanolDisplayed() {
        await $(this.espanolLocator).isDisplayed();
    }

    async clickEspanolLink() {
        await $(this.espanolLocator).click();
    }

    async clickEnglishDropdown() {
        await $(this.languageDropdown).click();
        await $(this.languageDropdown).isDisplayed();
        await $(this.englishDropdown).click();
    }

    async clickGuardarLanguage() {
        await $(this.guardarLanguageBtn).click();
    }

    async isEnglishDisplayed() {
        await $(this.englishLocator).isDisplayed();
    }
        
    async clickListPropertyLink() {
        await $(this.listPropertyLink).click();
    }
    
    async isWhtWldYuLikeToLstDisplayed() {
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://apps.expediapartnercentral.com/en_US/list?utm_medium=referral&utm_source=HCOM_US-en_US&utm_campaign=HomePage&utm_contentewd=pwa-header-btn&siteId=300000001&tpid=3001&eapid=1&langId=1033') === 0) {
                break;
            }
            await $(this.whatWouldYouLikeToListLink).isDisplayed();

        }
    }

}




module.exports = Homepage;