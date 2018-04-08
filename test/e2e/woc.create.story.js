var conf = require('../../nightwatch.conf.js');
var chance = require("chance")();

var emailSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-email > div > input";
var passwordSelector = "#lock-container > div > div > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(3) > div.auth0-lock-input-block.auth0-lock-input-show-password > div > div > input";
var createStoryLinkSelector = "body > div.ng-scope > div > div.container.pt-3 > div > div.col-6 > div.card.post > div.header.px-3.py-2.border-bottom > span > a";
var storyTitleInputSelector = "body > div.ng-scope > div > div > div > div > div.card-block.pl-4.ml-4.pt-0 > input";
var createStoryLinkActionSelector = "body > div.ng-scope > div > div > div > div > div.header > div.pull-right > span.dropdown.show > div > a.dropdown-item.text-primary";
var storyTitle = "story-" + chance.email({ domain: "ministryofprogramming.com" });
var navbarHomeLinkSelector = "body > div.ng-scope > div > header > nav > div > div:nth-child(1) > div > ul > li:nth-child(1) > a";
var feedStoriesContainerSelector = "body > div.ng-scope > div > div.container.pt-3 > div > div.col-6";

module.exports = {
    'War On Cancer Create Story - Smoke': function (browser) {
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
            .click('css selector', createStoryLinkSelector)
            .waitForElementVisible(storyTitleInputSelector)
            .setValue(storyTitleInputSelector, storyTitle)
            .click("#storyActionMenu")
            .click(createStoryLinkActionSelector)
            .url(process.env.ENVIRONMENT_URL + '/feed')
            .waitForElementVisible(feedStoriesContainerSelector)
            .expect.element('.title').text.to.contain(storyTitle);
    }
};




