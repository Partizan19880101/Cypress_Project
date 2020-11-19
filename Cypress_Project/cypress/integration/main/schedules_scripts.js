export class CreateSchedules{

    saveAsMaster(){
        cy.wait(3000)
        cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .schedule-card-wrapper > :nth-child(1) > .card > .actions > [aria-describedby="cdk-describedby-message-3"]').click()
    }
    saveAsPromo(){
        cy.wait(3000)
        cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .schedule-card-wrapper > :nth-child(2) > .card > .actions > [aria-describedby="cdk-describedby-message-3"]').click()
    }
    enterName(name){
        cy.get('#mat-input-1').type(name)
    }
    choosePeriod(){
        cy.get('#mat-input-3').click()
        cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click()
        cy.get('.mat-option-text').contains('2019').click()
        cy.get(':nth-child(2) > .pika-table > tbody > :nth-child(1) > .is-outside-current-month > .pika-button').click()
        cy.get('#mat-input-1').click()
    }
    enterTag(){
        cy.get('.ng-tns-c20-20 > form.ng-untouched > .ng2-tag-input__text-input').type('PAVEL')
        cy.get('body').click()
        cy.wait(3000)
        //cy.get('body').click()
        //cy.get('#mat-input-1').click()
        
        //cy.get('.ng-tns-c20-20 > form.ng-untouched > .ng2-tag-input__text-input').click()
    }
    clickSave(){
        cy.get('.mat-dialog-actions > .btn').click()
        cy.get('.dialog-actions > .btn').click()
        cy.wait(18000)
    }
    selectResedrButton(){
        
    }
    changeFolder() {
        
    }
    changeFolder() {
        
    }
    groupByFolder() {
        
    }
    addFolder() {
        
    }
    changeFolder() {
        
    }
    deleteSchedule() {
        cy.wait(7000) 
        cy.findAllByText('delete').first().click()
        cy.wait(2000)
        cy.get('.dialog-actions > .btn').click()
        cy.wait(2000)
    }
    searchScheduleType(){
        cy.get('.schedule-type > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.get('.mat-option-text').contains(' Unlocked ').click()

    }
    searchTag(){
        cy.get('.ng2-tag-input__text-input').type('Pavel')
        cy.wait(2000)
        
    }
    appluSearch(){
        cy.get('.apply-button').click()
        cy.wait(2000)
        //cy.findByText('').should('exit')
    }
    deleteafterSearch(){
        cy.wait(4000)
        cy.findAllByText('delete').first().click()
        cy.wait(2000)
        cy.get('.dialog-actions > .btn').click()
        cy.wait(2000)
    }
}
export default CreateSchedules