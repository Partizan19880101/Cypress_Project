
let uegroup = 'PavelZ';
export class UniveseEstimatesFilters{


    visitUEPage(){
        cy.wait(4000)
        cy.get('.material-icons').contains('timeline').click()
        cy.wait(4000)
    }
    selectYear(){
        cy.xpath("//span[text()='Year']").first().click()
        cy.wait(3000)
        cy.get('.mat-option-text').contains('2019').click()
        cy.wait(2000)
    }
    selectQuater(){
        cy.get('.mat-select-placeholder').contains('Quarter').click()
        cy.wait(3000)
        cy.get('.mat-option-text').contains(' Q1 ').click()
    }
    selectResedrButton(){
        cy.get('.mat-button-wrapper').contains('RESET').click()
        cy.wait(3000)
        cy.xpath("//span[text()='Year']").first().should('have.text', 'Year')
    }
    selectApplyButton() {
        cy.get('.mat-button-wrapper').contains(' APPLY ').click()
        cy.wait(6000)
        //cy.get('.data-table-row > :nth-child(2) > .ng-star-inserted').first().should('have.text', '2019')
    }
    searchURGroups() {
        cy.wait(2000)
        cy.get('#mat-input-1').type('Pave')
        cy.wait(2000)
        cy.get('.selected > .mat-list-item-content > .mat-list-text > .title').should('have.text', uegroup)
    }
    
    searchUE() {
        cy.wait(2000)
        cy.get('.input-search-table > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('2020')
        cy.get('.data-table-row > :nth-child(2) > .ng-star-inserted').first().should('have.text', '2020')
        cy.get('.data-table-row > :nth-child(2) > .ng-star-inserted').last().should('have.text', '2020')
    }
    editUE() {
        cy.wait(5000)
        //cy.get(':nth-child(1) > .buttons-column > .clearfix > :nth-child(4) > .btn').click()
        cy.get(':nth-child(1) > .buttons-column > .clearfix > :nth-child(4) > .btn > .mat-button-wrapper')
        .click()
        cy.get(':nth-child(1) > :nth-child(2) > .number-input > .view-mode-input-container > .view-mode-input').type('1')
        cy.get('edit-universe-estimate-modal.ng-star-inserted > .actions > .btn').click()
    }
    cloneUE() {
        cy.wait(2000)
        cy.get(':nth-child(1) > .buttons-column > .clearfix > :nth-child(3) > .btn').first().click()
        cy.wait(2000)
        cy.get('#mat-select-6 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click()
        cy.get('#mat-option-33 > .mat-option-text').contains('2021').click()
        cy.get('#mat-select-7 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click()
        cy.get('.mat-option-text').contains('Q4').click()
        cy.wait(5000)
        cy.get('.clearfix > .actions > .btn').click()
    }

    exportUE() {
        cy.get('.mat-button-wrapper').contains(' EXPORT ').click()
        cy.wait(5000)
    }
    importUE() {
        cy.get('.selected > .mat-list-item-content > .mat-list-text > .title').click()
        cy.get('.mat-button-wrapper').contains(' IMPORT ').click({ force: true })
        cy.get('.content > .mat-form-field > .mat-form-field-wrapper').click()
        cy.get('#mat-option-35 > .mat-option-text').click()
        cy.get('.clearfix > .actions > .btn > .mat-button-wrapper').click()   
    }
    clickCloneButton(){
        cy.wait(1000)
        cy.findAllByPlaceholderText('Search...').type(uegroup)
        cy.wait(2000)
        cy.get('.title').should('not.have.text', uegroup)
        cy.get('.search-input-wrapper > .mat-icon-button > .mat-button-wrapper > .mat-icon').click()
        cy.wait(2000)
        cy.get('.mat-button-wrapper').contains(' CLONE UNIVERSE ESTIMATE GROUP ').click()
        cy.wait(2000)
        cy.get('.content > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(uegroup)
        cy.wait(2000)
        cy.get('.clearfix > .actions > .btn').click()
        cy.wait(2000)
        //cy.get('.selected > .mat-list-item-content > .mat-list-text > .title').should('be.visible')
    }
    editUEGroups(){
        cy.wait(5000)
        cy.get('.selected > .mat-list-item-content > .edit-icon').click()
        cy.wait(5000)
        cy.get('#mat-input-4').type(uegroup)
        cy.get('.mat-button-wrapper').contains(' RENAME ').click()
    }
    deleteUEGroups(){
        cy.get('.selected > .mat-list-item-content > .mat-list-text > .title').should('have.text', uegroup)
        cy.wait(3000)
        cy.get('.selected > .mat-list-item-content > .delete-icon').click()
        cy.xpath('//span[contains(text(),"OK")]').click()
        cy.wait(2000)
        cy.get('#mat-input-1').type(uegroup)
        cy.wait(2000)
        cy.get('.title').should('not.have.text', uegroup)
    }
    deleteEditUEGroups(){
        cy.get('.selected > .mat-list-item-content > .mat-list-text > .title').should('have.text', uegroup+uegroup)
        cy.wait(3000)
        cy.get('.selected > .mat-list-item-content > .delete-icon').click()
        cy.xpath('//span[contains(text(),"OK")]').click()
        cy.wait(2000)
        cy.get('#mat-input-1').type(uegroup)
        cy.wait(2000)
        cy.get('.title').should('not.have.text', uegroup+uegroup)
        cy.get('.mat-icon').click()
    }
    
    
}

export default UniveseEstimatesFilters