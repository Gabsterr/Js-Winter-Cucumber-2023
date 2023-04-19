const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const SignupPage = require('../pages/SignupPage');
const SigninPage = require('../pages/SigninPage');
const Homepage = require('../pages/Homepage');
const moment = require("moment");

const signuppageobj = new SignupPage();
const signinpageobj = new SigninPage();
const homepageobj = new Homepage();

Given(/^I am on the hotels homepage$/, async function () {
    await browser.url('/');
});

When(/^I click on Signin link$/, async function () {
    await signinpageobj.clickSignInLink();
});

When(/^I click on Sign in button$/, async function () {
    await signinpageobj.clickSignInBtn();
});

When(/^I enter (.+) invalid email address$/, async function (invalid) {
    await signinpageobj.enterInvalidEmailSignIn(invalid);
});

When(/^I click on Continue button$/, async function () {
    await signinpageobj.clickSignInContinueBtn();
});

Then(/^I verify error message is displayed$/, async function () {
    await signinpageobj.isInvalidEmailErrorDisplayed();
});