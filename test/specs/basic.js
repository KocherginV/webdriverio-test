const assert = require('assert')

describe('webdriver.io page', () => {
    xit('should have the right title', () => {
        browser.url('https://webdriver.io');
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })

    xit('should show addValue command', () => {
        browser.url('https://webdriver.io');
        let input = $('#search_input_react')
        input.addValue('test');
        browser.pause(2000);
        input.addValue('123');
        browser.pause(2000);

        value = input.getValue();
        assert(value === 'test123');
    })

    xit('should demonstrate setValue command', () => {
        browser.url('https://webdriver.io');
        const elem = $('#search_input_react');
        elem.setValue('test123');
        browser.pause(2000);
    })

    xit('should demonstrate the click command', () => {
        browser.url('https://webdriver.io');
        const blogBtn = $('[href="/blog"]');
        browser.pause(2000);
        blogBtn.click();
        browser.pause(2000);
        const guideBtn = $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]');
        guideBtn.click();
        browser.pause(2000);
    })

    xit('should demonstrate getAttribute command', () => {
        browser.url('https://webdriver.io');
        const input = $('#search_input_react');
        let attr = input.getAttribute('title');
        console.log("Value attribute is: " + attr); // returns 'Search'

        input.setValue('test123');
        attr = input.getAttribute('value');
        console.log("Value attribute is: " + attr); //returns 'test123'
    })

    xit('should demonstrate getLocation function', () => {
        browser.url('https://webdriver.io');
        const logo = $('#search_input_react');
        const location = logo.getLocation();
        console.log(location);

        const xLocation = logo.getLocation('x');
        console.log('xLocation: '+ xLocation);
    })

    xit('should demonstrate getText function', () => {
        browser.url('https://webdriver.io');
        const blogBtn = $('[href="/blog"]');
        console.log("Text for element: " + blogBtn.getText());
    })
    
    xit('should do homework', () => {
        browser.url('https://webdriver.io/');
        const apiBtn = $('[href="/docs/api.html"]');
        apiBtn.click();

        const url = browser.getUrl();
        console.log("URL is: " + url);

        const element = $('#__docusaurus');
        const titleString = element.getText();
        console.log("API string is: " + titleString);

        const link = $('//*[text()="JSONWire protocol"]');
        let attr = link.getAttribute('href');
        console.log("Value attribute is: " + attr);

        const search = $('#search_input_react');
        search.setValue('test is');
        search.setValue(' DONE!');
        browser.pause(5000);
    })

    xit('Should detect if element is clickable', () => {
        browser.url('https://webdriver.io/');
        const blogBtn = $('[href="/blog"]');
        let isClickable = blogBtn.isClickable();
        console.log("is clickable: " + isClickable);
    })

    xit('Should detect if element is displayed', () => {
        browser.url('https://webdriver.io/');
        const blogBtn = $('[href="/blog"]');
        let isDisplayed = blogBtn.isDisplayed();
        console.log("is displayed: " + isDisplayed);
    })

    xit('Should detect if element is visible', () => {
        browser.url('https://webdriver.io/');
        let isBlogDisplayedInViewPort = $('[href="/blog"]').isDisplayedInViewport();
        console.log("isBlogDisplayedInViewPort: " + isBlogDisplayedInViewPort);

        let isGitHubInViewport = $('[href="https://github.com/webdriverio/webdriverio"]')
                                    .isDisplayedInViewport();
        console.log("isGitHubInViewport: " + isGitHubInViewport);
    })

    xit('Should detect if element is enabled', () => {
        browser.url('https://webdriver.io/');
        const blogBtn = $('[href="/blog"]');
        let isEnabled = blogBtn.isEnabled();
        console.log("is clickable: " + isEnabled);
    })

    xit('Should detect focus on the element', () => {
        browser.url('https://webdriver.io/');
        const input = $('#search_input_react');
        console.log("Input focused before click : " + input.isFocused());
        browser.pause(2000);
        input.click();
        console.log("Input focused after click : " + input.isFocused());
        browser.pause(2000);
    })

    it('Should move to the element', () => {
        browser.url('https://webdriver.io/');
        const githubLink = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        browser.pause(4000)
        githubLink.scrollIntoView();
        browser.pause(3000);
    })
})
