
class Homepage {

    // locators of webElements on SignupPage (with in chropath and in const)
    englishLocator = '//div[text()="English"]';
    languageDropdown = '#language-selector';
    espanolDropdown = '//option[text()="Español (Estados Unidos)"]';
    saveLanguageBtn = '//button[text()="Save"]';
    espanolLocator = '//div[text()="Español"]';//tagName[text()="text value"] tagName=text value Español
    englishDropdown = '//option[text()="English (United States)"]';
    guardarLanguageBtn = '//button[text()="Guardar"]';
    listPropertyLink = '//div[text()="List your property"]';
    whatWouldYouLikeToListLink = '//p[text()="What would you like to list?"]';
    lodgingLocator = '//p[text()="Lodging"]';
    prvtResidenceLocator = '//p[text()="Private residence"]';//PrvtResidenceDisplayed
    step1of3Locator = '//div[text()="Step 1 of 3"]';
    SeeHwMchYuCldErnLocator = '//h1[text()="See how much you could earn!"]';
    increaseBedroomsBtn = '//button[@aria-label="Increase bedrooms"]';
    increaseBathroomsBtn = '//button[@aria-label="Increase bathrooms"]';
    nextBtnLocator = '#propertyInfoNextBtn';
    step2of3Locator = '//div[text()="Step 2 of 3"]';
    whereIsYourPropertyLocated = '//h1[text()="Where is your property located?"]';
    enterAddressLocator = '#locationTypeAhead';
    typeheadMatchLocator = '//span[text()="1216"]';//tagName[@attrName="attr value"]
    graphLocator = '//div[@style="style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;""]';
    pinInGraphLocator = '//img[@style="width: 34px; height: 40px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"]';
    textBelowGraphLocator = '//span[text()="Move the pin to adjust the location of your property."]';


    // functions to intercat with webElements on SignupPage


    async clickEnglishLink() {
        await $(this.englishLocator).click();
    }

    async clickEspanolDropdown() {

        await $(this.languageDropdown).click();
        await $(this.languageDropdown).isDisplayed();
        await $(this.espanolDropdown).click();

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

    async isPrvtResidenceDisplayed() {
        await $(this.prvtResidenceLocator).isDisplayed();
    }

    async isLodgingDisplayed() {
        await $(this.lodgingLocator).isDisplayed();
    }



    async clickPrivateResidenceLink() {
        await $(this.prvtResidenceLocator).click();
    }

    async isStep1of3Displayed() {
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://www.vrbo.com/en-us/list/property-details?theme=mvp&utm_medium=referral&utm_source=ULX_MVP&utm_medium=referral&utm_source=HCOM_US-en_US&utm_campaign=HomePage&utm_contentewd=pwa-header-btn&siteId=300000001&tpid=3001&eapid=1&langId=1033') === 0) {
                break;
            }
        }
        await $(this.step1of3Locator).isDisplayed();
    }

    async isSeeHwMchYuCldErnDisplayed() {
        await $(this.SeeHwMchYuCldErnLocator).isDisplayed();
    }

    async select4AsBedroom() {
        await $(this.increaseBedroomsBtn).click();
        await $(this.increaseBedroomsBtn).click();
        await $(this.increaseBedroomsBtn).click();
        await $(this.increaseBedroomsBtn).click();
    }

    async selectTwoAndHalfBathrms() {
        await $(this.increaseBathroomsBtn).click();
        await $(this.increaseBathroomsBtn).click();
        await $(this.increaseBathroomsBtn).click();

    }

    async clickNextBtn() {
        await $(this.nextBtnLocator).click();
    }

    async isStep2of3Displayed() {
        await $(this.step2of3Locator).isDisplayed();
    }

    async isWhereIsYourPropertyLocatedisplayed() {
        await $(this.whereIsYourPropertyLocated).isDisplayed();
    }
    async enterAddress(address) {
        await $(this.enterAddressLocator).waitForDisplayed();
        await $(this.enterAddressLocator).setValue(address);
    }
    //"1216 South Orange Blossom Trail, Orlando, FL, USA"]
    async selectTypeheadMatch() {
        await $(this.typeheadMatchLocator).click();
    }

    async isGraphDisplayed() {
        await $(this.graphLocator).isDisplayed();
    }

    async isPinInGraphDisplayed() {
        await $(this.pinInGraphLocator).isDisplayed();
    }

    async isTextBelowGraphDisplayed() {
        await $(this.textBelowGraphLocator).isDisplayed();
    }
    
    async clickOnTravelersLink() {
        await $(this.).click();
    }





module.exports = Homepage;