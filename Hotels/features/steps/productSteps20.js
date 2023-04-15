const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const SignupPage = require('../pages/SignupPage');
const SigninPage = require('../pages/SigninPage');
const Homepage = require('../pages/Homepage');
const moment = require("moment");

const signuppageobj = new SignupPage();
const signinpageobj = new SigninPage();
const homepageobj = new Homepage();



Given(/^I am on hotels Homepage$/, async function () {
    await browser.url('/');
});

When(/^I click on SignIn Link$/, async function () {
    await signinpageobj.clickSignInLink(); 
});

When(/^I click on SignUp Link$/, async function () {
    await signuppageobj.clickSignupLink();
});

When(/^I click Terms and Conditions link$/, async function () {
     await signuppageobj.clickTermsConditionsLink();
});

Then(/^I verify Terms and Conditions page opens in new tab$/, async function () {
    const isTermsConditionsTabDisplayed = await signuppageobj.isTermsConditionsInNewTab();
    expect(isTermsConditionsTabDisplayed, ' Terms and Conditions page did not open in new tab').to.be.true;
});

Then(/^I verify Last Revised date format$/, async function () { //(expected format: MM/dd/yy)
        const lastRevisedDate = await signuppageobj.lastRevisedText();
        console.log(lastRevisedDate);
        expect(lastRevisedDate, 'Date format is not MM/dd/yy').to.equal('01/01/23');
    });

When(/^I click Privacy Statement link$/, async function () { 
     await signuppageobj.clickPrivacyStatementLink();
    });  

Then(/^I verify Privacy Statement page opens in new tab$/, async function () { 
    const isPrivacyStatementTabDisplayed = await signuppageobj.isPrvcyStmtOpeningNewTab();
    expect(isPrivacyStatementTabDisplayed, 'Privacy Statement page does not open in new tab').to.be.true;

    });

    Then(/^I verify Last Updated date format$/, async function () {   // (expected format: dd MMMM, yyyy)
        
    
        });