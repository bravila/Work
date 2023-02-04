export class SearchComputerPage{

    constructor(){
        this.filterByNameField = '#searchbox'
        this.filterByNameButton = '#searchsubmit'
        this.successEditMessage = 'div[class="alert-message warning"]'
        this.tableBody = 'tbody'
        this.addNewComputerButton = 'a[id="add"]'

    }

    searchComputer(computerName){
        cy.get(this.filterByNameField)
        .clear()
        .type(computerName)
        cy.get(this.filterByNameButton)
        .click()
    }

    enterToComputer(computerName){
        cy.contains('table', 'Computer name').contains(computerName).click()
    }

    successEditComputerMessage(newName){
        cy.get(this.successEditMessage).should('contain', 'Computer ' + newName + ' has been updated')
    }

    createMap(){
        const getText = ($el) => {
            return Cypress._.map($el, 'innerText')
        }

        cy.get(this.tableBody)
        .find('tr').then(getText)
        .then(cy.log)
    }

    goToLastFilteredPage(){
        const nextButton = '.next > a'
        cy.get(nextButton).click()
        cy.get(nextButton).click()
        cy.get(nextButton).click()
    }

    findNameComputersInTable(){
        const getText = ($el) => {
            return Cypress._.map($el, 'innerText')
        }

        cy.get(this.tableBody)
        .find('tr > td:nth-child(1)').then(getText)
        .then(cy.log)
    }

    clickAddNewComputerButton(){
        cy.get(this.addNewComputerButton)
        .click()
    }

    successCreateComputerMessage(computerName){
        cy.get(this.successEditMessage).should('contain', 'Computer ' + computerName + ' has been created')
    }

    findComputerCreated(){
        cy.get(this.tableBody)
    }
}

export const onSearchComputerPage = new SearchComputerPage()