const assert = require('assert')
const mainPage = require('../page/main.page.js')

describe('webdriverio page', () => {
    it('should demonstrate addValue command', () => {
        browser.url('https://webdriver.io');
        browser.pause(5000)
        mainPage.searchInput.setValue('test');
        browser.pause(2000);
        mainPage.setUserName('type with method');
        browser.pause('2000');
    })
})
