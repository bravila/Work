export class AddComputerPage{
    
    constructor(){
        this.nameField = '#name'
        this.introducedField = '#introduced'
        this.discontinuedField = '#discontinued'
        this.companySelector = '#company'
        this.createThisComputerButton = '.primary'
    }

    fillComputerName(computerName){
        cy.get(this.nameField).type(computerName)
    }

    fillIntroduced(introducedDate){
        cy.get(this.introducedField).type(introducedDate)
    }

    fillDiscontinued(discontinuedDate){
        cy.get(this.discontinuedField).type(discontinuedDate)
    }

    selectCompany(companyName){
        cy.get(this.companySelector).select(companyName)
    }

    clickCreateThisComputer(){
        cy.get(this.createThisComputerButton).click()
    }
}

export const onAddComputerPage = new AddComputerPage()