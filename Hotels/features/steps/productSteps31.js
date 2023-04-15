const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const SignupPage = require('../pages/SignupPage');
const SigninPage = require('../pages/SigninPage');
const Homepage = require('../pages/Homepage');

const signuppageobj = new SignupPage();
const signinpageobj = new SigninPage();
const homepageobj = new Homepage();


Given(/^I am on Hotels Homepage1$/, async function () {
    await browser.url('/');
});

When(/^I click on English language link$/, async function () {
    await homepageobj.clickEnglishLink(); 
});

When(/^I select Español Estados Unidos in Language dropdown$/, async function () {
    await homepageobj.clickEspanolDropdown(); 
});

When(/^I click on Save button$/, async function () {
    await homepageobj.clickSaveLanguage(); 
});

Then(/^I verify Español is displayed$/, async function () {
    await homepageobj.isEspanolDisplayed(); 
});

When(/^I click on Espanol language$/, async function () {
    await homepageobj.clickEspanolLink(); 
});

When(/^I select English United States in Language dropdown$/, async function () {
    await homepageobj.clickEnglishDropdown(); 
});

When(/^I click on Guardar button$/, async function () {
    await homepageobj.clickGuardarLanguage(); 
});

Then(/^I verify English is displayed$/, async function () {
    await homepageobj.isEnglishDisplayed(); 
});