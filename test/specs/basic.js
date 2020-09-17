const assert = require('assert')
const mainPage = require('../page/main.page.js')
const docsPage = require('../page/docs.page.js')

describe('webdriverio page', () => {
    it('should demonstrate addValue command', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
        mainPage.searchInput.setValue('test');
        browser.pause(2000);
        mainPage.setValueSearch('type with method');
        browser.pause('2000');
    })

    it('should click on Docs button', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
        mainPage.docsNavBarButton.click()
        browser.pause(2000);
        assert(browser.getUrl() == 'https://webdriver.io/docs/gettingstarted.html');
    })

    it('should click on API button', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
        mainPage.apiNavBarButton.click();
        browser.pause(2000);
        assert(browser.getUrl() == 'https://webdriver.io/docs/api.html');
    })

    it('should click on Help button', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
        mainPage.helpNavBarButton.click();
        browser.pause(2000);
        assert(browser.getUrl() == 'https://webdriver.io/help.html');
    })
    
    it('should click on Versions button', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
        mainPage.versionsNavBarButton.click();
        browser.pause(2000);
        assert(browser.getUrl() == 'https://webdriver.io/docs/versions.html');
    })

    it('should click on Blog button', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
        mainPage.blogNavBarButton.click();
        browser.pause(2000);
        assert(browser.getUrl() == 'https://webdriver.io/blog/');
    })

    it('should click on Contribute button', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
        mainPage.contributeNavBarButton.click();
        browser.pause(2000);
        assert(browser.getUrl() == 'https://webdriver.io/docs/contribute.html');
    })
    
    it('should click on Get Started button', () => {
        browser.url('https://webdriver.io');
        browser.pause(2000);
        expect(mainPage.getStartedButton).toBeDisplayed();
        mainPage.getStartedButton.click();
        browser.pause(2000);
        assert(browser.getUrl() == 'https://webdriver.io/docs/gettingstarted.html');
    })

    xit('should click on Docs button on Docs page', () => {
        //TODO: test fails in headless mode. To figure out why.
        browser.url('https://webdriver.io');
        browser.pause(2000);
        mainPage.docsNavBarButton.click();
        browser.pause(2000);
        docsPage.editButton.click();
        browser.switchWindow('Sign in to GitHub');
        expect(docsPage.signInToGithub).toBeDisplayed();
        assert(docsPage.signInToGithub.getText() == "Sign in to GitHub");
    })

})
