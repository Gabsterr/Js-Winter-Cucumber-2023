const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const SignupPage = require('../pages/SignupPage');
const SigninPage = require('../pages/SigninPage');
const Homepage = require('../pages/Homepage');
const moment = require("moment");

const signuppageobj = new SignupPage();
const signinpageobj = new SigninPage();
const homepageobj = new Homepage();

Given(/^I am on hotels homepage$/, async function () {
    await browser.url('/');
});

When(/^I click on SignIn link$/, async function () {
    await signinpageobj.clickSignInLink(); 
});

When(/^I click on SignUp link$/, async function () {
    await signuppageobj.clickSignupLink();
});

When(/^I enter (.+) as invalid email address$/, async function (invalid) {
    await signuppageobj.enterInvalidEmail(invalid);
});

When(/^I click Continue button$/, async function () {
    await signuppageobj.clickContinueBtn();
});

Then(/^I verify error "Enter a valid email" is displayed$/, async function () {
   const isSignupErrDisplayed = await signuppageobj.IsSignupErrorMsgDisplayed();
   expect(isSignupErrDisplayed, 'Email signup error is NOT displayed').to.be.true;
});

Then(/^I verify “Continue” button is enabled$/, async function () {
   await signuppageobj.IsSignupContinueBtnEnabled();
});