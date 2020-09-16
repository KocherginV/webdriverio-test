class MainPage {
    
    get searchInput() {
        return $('#search_input_react')
    }

    get docsNavBarButton() {
        return $('[class="nav-site nav-site-internal"] [href="/docs/gettingstarted.html"]')
    }

    get apiNavBarButton() {
        return $('[class="nav-site nav-site-internal"] [href="/docs/api.html"]')
    }

    get helpNavBarButton() {
        return $('[class="nav-site nav-site-internal"] [href="/help.html"]')
    }

    get versionsNavBarButton() {
        return $('[class="nav-site nav-site-internal"] [href="/docs/versions.html"]')
    }
    
    get blogNavBarButton() {
        return $('[class="nav-site nav-site-internal"] [href="/blog/"]')
    }

    get contributeNavBarButton() {
        return $('[class="nav-site nav-site-internal"] [href="/docs/contribute.html"]')
    }

    get getStartedButton() {
        return $('[class="pluginWrapper buttonWrapper"] [href="/docs/gettingstarted.html"]')
    }

    setValueSearch(value) {
        this.searchInput.addValue(value)
    }

}

module.exports = new MainPage()