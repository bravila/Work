export class EditComputerPage{

    constructor(){
        this.nameField = '#name'
        this.saveButton = '.primary'
        this.errorMessage = 'div[class="input"]'
    }

    editNameComputerWithEmptyValue(){
        cy.get(this.nameField)
        .clear()
        cy.get(this.saveButton)
        .click()
    }

    editComputerName(newName){
        cy.get(this.nameField)
        .clear()
        .type(newName)
        cy.get(this.saveButton)
        .click()
    }

    errorMessageInvalidValue(messageInvalidValue){
        cy.get(this.errorMessage).contains('Failed').should('contain', messageInvalidValue)

    }

}

export const onEditComputerPage = new EditComputerPage ()