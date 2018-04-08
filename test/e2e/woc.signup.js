var conf = require('../../nightwatch.conf.js');
var chance = require("chance")();

var signLinkUpSeletcor = "body > div.ng-scope > div > div > div > div.sidebar > div > div > div.row.heading > div.col-8.pt-2.text-right > a";
var emailSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-email > div > input";
var passwordSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-show-password > div > div > input";
var firstName = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-first_name > div > input";
var lastName = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-last_name > div > input";


module.exports = {
  'War On Cancer Sign Up - Smoke': function (browser) {
    browser
    .url("http://stg.waroncancer.com")
    .waitForElementVisible('body');
    browser.element('css selector', signLinkUpSeletcor, function (result) {
      if (result.status != -1) {
        browser.click('css selector', signLinkUpSeletcor)
          .waitForElementVisible('body'); 
      }
    });


    browser
      .waitForElementVisible('.auth0-lock-submit')
      .click('.auth0-lock-submit')
      .waitForElementVisible('.auth0-lock-error');

    var email = chance.email({ domain: "ministryofprogramming.com" });

    setTimeout(function () {
      browser
        .waitForElementVisible(".auth0-lock-form")
        .setValue(emailSelector,
          email)
        .setValue(passwordSelector, "Password54321")
        .setValue(firstName, "Eldin")
        .setValue(lastName, "Semovic")
        .click('.auth0-lock-submit')
        .waitForElementVisible('.profile-card')
        .click('#navbarDropdownProfile')
        .click('css selector', "body > div.ng-scope > div > header > nav > div > div.col-3.ng-scope > div > ul > li.nav-item.dropdown.show > div > a:nth-child(5)")
        .end();
    }, 1000);
  }
};




