var conf = require('../../nightwatch.conf.js');
var chance = require("chance")();

var emailSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-email > div > input";
var passwordSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-show-password > div > div > input";

var firstNameInputSelector = "body > div.ng-scope > div > div > div > div.col-6 > form > div > div.card-block > div:nth-child(1) > div:nth-child(1) > input";
var lastNameInputSelector = "body > div.ng-scope > div > div > div > div.col-6 > form > div > div.card-block > div:nth-child(1) > div:nth-child(2) > input";
var aboutYourselfSelector = "body > div.ng-scope > div > div > div > div.col-6 > form > div > div.card-block > div:nth-child(2) > div > textarea";
var datePickerSelector = "body > div.ng-scope > div > div > div > div.col-6 > form > div > div.card-block > div:nth-child(3) > div:nth-child(1) > input";
var cityInputSelector = "body > div.ng-scope > div > div > div > div.col-6 > form > div > div.card-block > div:nth-child(4) > div:nth-child(2) > input";
var saveButtonSelector = "body > div.ng-scope > div > div > div > div.col-6 > form > div > div.card-header.p-2 > span > button";

module.exports = {
    'War On Cancer Edit profile - Smoke': function (browser) {
        browser
        .url("http://stg.waroncancer.com")
        .waitForElementVisible('body')
            .waitForElementVisible('.auth0-lock-submit');


        browser.click('.auth0-lock-submit')
            .waitForElementVisible('.auth0-lock-error')
            .waitForElementVisible(".auth0-lock-form")
            .setValue(emailSelector,
                "createstory@grr.la")
            .setValue(passwordSelector, "123456")
            .click('.auth0-lock-submit')
            .waitForElementVisible('.profile-card')
            .click('#navbarDropdownProfile')
            .click("body > div.ng-scope > div > header > nav > div > div.col-3.ng-scope > div > ul > li.nav-item.dropdown.show > div > a:nth-child(3)")
            .clearValue(firstNameInputSelector)
            .setValue(firstNameInputSelector, "Eldin")
            .clearValue(lastNameInputSelector)
            .setValue(lastNameInputSelector, "Semovic")
            .setValue(aboutYourselfSelector, "Test")
            .clearValue(datePickerSelector)
            .setValue(datePickerSelector, "10101988")
            .click("#country")
            .click("#ui-select-choices-row-0-3")
            .clearValue(cityInputSelector)
            .setValue(cityInputSelector, "Sarajevo")
            .click(saveButtonSelector)
            .end();
    }
};




