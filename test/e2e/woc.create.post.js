var conf = require('../../nightwatch.conf.js');
var chance = require("chance")();

var emailSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-email > div > input";
var passwordSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-show-password > div > div > input";
var storyTitleInputSelector = "body > div.ng-scope > div > div > div > div > div.card-block.pl-4.ml-4.pt-0 > input";
var createPostSelector = "body > div.ng-scope > div > div.container.pt-3 > div > div.col-6 > div.card.post > div.card-block > div > div.ml-3.w-100 > div > input";
var postContentInputSelector = "body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div > div > div.card-block.pb-0 > div > div.ml-3.w-100 > div.form-group.has-primary > textarea";
var postTitle = "post-" + chance.email({ domain: "ministryofprogramming.com" });
var createPostButtonSelector = "body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div > div > div.card-block.pl-4.ml-4.pt-0 > div > button.btn.btn-primary.btn-sm";

module.exports = {
    'War On Cancer Create Post - Smoke': function (browser) {
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
            .waitForElementVisible(createPostSelector)
            .click('css selector', createPostSelector)
            .setValue(postContentInputSelector, postTitle)
            .click(createPostButtonSelector)
            .url(process.env.ENVIRONMENT_URL + '/feed')
            .end();
    }
};




