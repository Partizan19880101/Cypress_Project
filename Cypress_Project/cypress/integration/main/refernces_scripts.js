
export class Reference{

 
    visitReferencesPage(){
        cy.wait(4000)
        cy.get('.material-icons').contains('storage').click()
        cy.wait(2000)
    }
    addReference(Reference, year){
        //var Reference;
        //var year = Math.floor(Math.random() * 100);
        cy.get('.card-header > .btn').click()
        cy.wait(1000)
        cy.get('#mat-button-toggle-5-button').click()
        cy.wait(2000)
        cy.findByPlaceholderText('Content Name').should('exist').click()
        //cy.get('#mat-autocomplete-0').scrollTo('bottom')
        cy.wait(2000)
        cy.get('.name').contains(`${Reference}`).first().click()
        cy.get('.mat-select-arrow').last().click()
        cy.wait(3000)
        cy.get('.mat-option-text').contains(' ADVENTURE ').click()
        cy.wait(3000)
        cy.get('#mat-input-3').clear().type('19' + `${year}`)
    
        cy.wait(2000)
        //cy.get('#mat-dialog-title-0').click()
        cy.get('.actions > .btn').click()
        cy.wait(4000)
    }
    findReference(Reference, year){
        cy.findAllByPlaceholderText('Search...').first().type(`${Reference}` + ' ' + `${year}`)
        cy.get('.title').should('have.text', `${Reference}` + ' ' + `${year}`)
    }
    deleteReference(Reference){
        cy.wait(1000)
        cy.get('.delete-icon').click()
        cy.wait(1000)
        cy.get('.dialog-actions > .btn').click()
        cy.wait(1000)
        cy.get('mat-icon').contains('close').click()
        cy.findAllByPlaceholderText('Search...').first().type(Reference)
        cy.get('.title').should('not.have.text', Reference)
    }
    addLinks(search, link){
        cy.get('.mat-button-wrapper').contains(' ADD LINKS ').click()
        cy.findByPlaceholderText('Content Name').type(search)
        cy.get('.name').contains(link).click()
        cy.get('.actuals-btn > .btn').click()
    }
    actualsPage(){
        cy.wait(1000)
        cy.get('button').contains('SEARCH').click()
        cy.wait(3000)
        cy.get('actuals-modal.ng-star-inserted > .mat-dialog-content').scrollTo('bottom')
        cy.wait(4000)
        cy.get('.mat-expansion-panel-header-title').last().click()
        cy.wait(4000)
        cy.percySnapshot()
        cy.get('actuals-modal.ng-star-inserted > .mat-dialog-actions > .cancel-btn').click()
        cy.get('.actions > .btn').click()
        cy.wait(4000)
        // cy.get(':nth-child(1) > .row > :nth-child(10) > .cell > .actions > .mat-icon-button > .mat-button-wrapper > .mat-icon').click()
        // cy.wait(1000)
        // cy.get('.dialog-actions > .btn').click()
        // cy.wait(1000)
        
    }
}
export default Reference