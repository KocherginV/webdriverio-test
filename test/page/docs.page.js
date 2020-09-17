class DocsPage {
    
    get editButton() {
        return $('.edit-page-link.button')
    }

    get signInToGithub() {
        return $('.auth-form-header')
    }

    clickEditButton() {
        this.editButton.click()
    }

}

module.exports = new DocsPage()