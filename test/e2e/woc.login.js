var conf = require('../../nightwatch.conf.js');

var signLinkUpSeletcor = "body > div.ng-scope > div > div > div > div.sidebar > div > div > div.row.heading > div.col-8.pt-2.text-right > a";
var emailSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-email > div > input";
var passwordSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-show-password > div > div > input";


module.exports = {
  'War On Cancer Log in - Smoke': function (browser) {
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
      .click('css selector', "body > div.ng-scope > div > header > nav > div > div.col-3.ng-scope > div > ul > li.nav-item.dropdown.show > div > a:nth-child(5)")
      .end();
  }
};




