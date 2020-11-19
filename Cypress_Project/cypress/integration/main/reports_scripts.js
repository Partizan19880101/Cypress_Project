
export class ReportsPage{
    visitReportPage(){
        cy.get('.material-icons').contains('description').click()
        cy.wait(5000)
    }
    selectDemoblock(){
        cy.get('#mat-select-3').should('be.visible').click()
        cy.get('.mat-option-text')
        .contains('IND 55').should('be.visible').click()
    }
    selectTSV(){
        cy.get('#mat-select-4').should('be.visible').click()
        cy.get('.mat-option-text')
        .contains('LIVE').should('be.visible').click()
    }
    selectSchedule(){
        cy.get('#mat-input-2').should('be.visible').click()
        cy.get('.mat-option-text > .option-info > .option-info-name')
        .contains('Master')
        .click()
    }
    selectPeriod() {
        cy.wait(2000)
        cy.get('.dropdown').click()
        cy.findAllByText('SELECT YEAR').first().click({force: true})
        cy.get('.mat-option-text').contains('2019').click()
        cy.get(':nth-child(2) > .pika-table > tbody > :nth-child(2) > [data-day="7"] > .pika-button').click()
        
    }
    gererateReport() {
        cy.get('.clearfix > .btn').click()
        cy.wait(5000)
    }
}
export default ReportsPage
