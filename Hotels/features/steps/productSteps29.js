const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const SignupPage = require('../pages/SignupPage');
const SigninPage = require('../pages/SigninPage');
const Homepage = require('../pages/Homepage');

const signuppageobj = new SignupPage();
const signinpageobj = new SigninPage();
const homepageobj = new Homepage();


Given(/^I am on hotels homepage$/, async function () {
    await browser.url('/');
});

When(/^I click on List your property$/, async function () {
    await homepageobj.clickListPropertyLink();
});

Then(/^I verify What would you like to list is displayed$/, async function () {
    await homepageobj.isWhtWldYuLikeToLstDisplayed();
});