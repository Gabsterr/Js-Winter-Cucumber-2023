const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const SignupPage = require('../pages/SignupPage');
const SigninPage = require('../pages/SigninPage');
const Homepage = require('../pages/Homepage');
const moment = require("moment");

const signuppageobj = new SignupPage();
const signinpageobj = new SigninPage();
const homepageobj = new Homepage();



Given(/^I launch Hotels homepage$/, async function () {
    await browser.url('/');
});

When(/^I click on Travelers$/, async function () {
    await signinpageobj.clickOnTravelersLink();
});
