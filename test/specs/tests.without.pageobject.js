const assert = require('assert')
//TODO: because of test site re-design no elements found, hence tests need to be fixed

describe.skip('webdriver.io page', () => {
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
        console.log('xLocation: ' + xLocation);
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

    xit('Should move to the element', () => {
        browser.url('https://webdriver.io/');
        const githubLink = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        browser.pause(4000)
        githubLink.scrollIntoView();
        browser.pause(3000);
        const input = $('#search_input_react');
        input.scrollIntoView();
    })

    xit('Should save screenshot', () => {
        browser.url('https://webdriver.io/');
        const githubLink = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        githubLink.saveScreenshot('screen.png');
    })

    xit('Should switch to another window', () => {
        browser.url('https://google.com');
        browser.newWindow('https://webdriver.io');
        browser.pause(2000);
        browser.switchWindow('google.com');
        browser.pause(2000);
        browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js');
    })

    xit('Should wait until', () => {
        browser.url('https://webdriver.io');
        browser.waitUntil(() => {
            return $('[href="/blog/"]').isDisplayed();
        }, 5000, 'blog is not displayed');
    })

    xit('Should get HTML for specific elements', () => {
        browser.url('https://webdriver.io/docs/api.html');
        var outerHtml = $('.siteNavGroupActive').getHTML();
        console.log("outerHTML: " + outerHtml);

        var innerHtml = $('.siteNavGroupActive').getHTML(false);
        console.log("innerHTML: " + innerHtml);
    })

    it.only('Should do another homework', () => {
        browser.url('https://webdriver.io/docs/api.html');
        const link = $('//*[text()="JSONWire protocol"]');
        let attr = link.getAttribute('href');
        browser.newWindow(attr);
        var wikiLink = $('strong a[href="/SeleniumHQ/selenium/wiki"]');
        console.log("Is link displayed:" + wikiLink.isDisplayed()); //true

        browser.switchWindow('https://webdriver.io/docs/api.html');
        var title = $('.postHeaderTitle');
        browser.waitUntil(() => {
            return title.getText() == "API Docs"
        }, 5000, 'Element was not displayed');
        title.saveScreenshot('element.png');

        var twitterLink = $('[href="https://twitter.com/webdriverio"]');
        console.log("isDisplayed before scroll: " + twitterLink.isDisplayed()); //true
        console.log("isDisplayedInViewPort before scroll: " + twitterLink.isDisplayedInViewport()); //false
        twitterLink.scrollIntoView();
        console.log("isDisplayed after scroll: " + twitterLink.isDisplayed()); //true
        console.log("isDisplayedInViewPort after scroll: " + twitterLink.isDisplayedInViewport()); //true

        var blogBtn = $('[href="/blog/"]');
        console.log("Blog button is focused before click: " + blogBtn.isFocused()); //false
        browser.pause(2000);
        blogBtn.click();
        browser.pause(2000);
        console.log("Blog button is focused after click: " + blogBtn.isFocused()); //false?
    })
})