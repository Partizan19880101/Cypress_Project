export class Calibration{

    enterToSchedule1(){
        //cy.findAllByText('QA Pavel').cli
        cy.get('.name').contains('PZ Pavel').click()
        cy.wait(4000)
    }
    lockSchedules1(){
        cy.get('.actions-header-item-left > .mat-warn').click()
        cy.get('.dialog-actions > .btn').click()
        cy.wait(3000)
        cy.percySnapshot('beforeProjection')
    }
    openGlobalCalibration(){
        cy.get(':nth-child(1) > .open-dropdown-btn').click()
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('.view-mode-input').first()
        .click()
        cy.get('.mat-form-field ng-tns-c14-103').type('6000').click()

        cy.get('.mat-dialog-actions > .ng-star-inserted > .btn').click()
    }
    openDaypartCalibration(){
        cy.get(':nth-child(1) > .open-dropdown-btn').click()
        cy.get('.cdk-focused').click()    
        cy.get('.[rowid="1"] > :nth-child(3) > .number-input > .view-mode-input-container > .view-mode-input')
        .click()    
    }
    
}
export default Calibration