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

Then(/^I verify Lodging and Private residence options are displayed$/, async function () {
    await homepageobj.isLdgngPrvtResidenceDisplayed();
    
});

When(/^I click on Private residence$/, async function () {
    await homepageobj.clickPrivateResidenceLink();
});

Then(/^I verify Step 1 of 3 is displayed$/, async function () {
    await homepageobj.isStep1of3Displayed();
});

Then(/^I verify See how much you could earn! is displayed$/, async function () {
    await homepageobj.isSeeHwMchYuCldErnDisplayed();
});

When(/^I enter 4 as bedroom$/, async function () {
    await homepageobj.select4AsBedroom();
});

When(/^I enter 2.5 as bathroom$/, async function () {
    await homepageobj.selectTwoAndHalfBathrms();
});

When(/^I click on Next button$/, async function () {
    await homepageobj.clickNextBtn();
});

Then(/^I verify Step 2 of 3 is displayed$/, async function () {
    await homepageobj.isStep2of3Displayed();
});

Then(/^I verify Where is your property located is displayed$/, async function () {
    await homepageobj.isWhereIsYourPropertyLocatedisplayed();
});

When(/^I enter (.+) in address$/, async function (address) {
    await homepageobj.enterAddress(address);
});

When(/^I select (.+) from auto-suggestion$/, async function () {
    await homepageobj.selectTypeheadMatch();//"1216 South Orange Blossom Trail, Orlando, FL, USA"]
});

