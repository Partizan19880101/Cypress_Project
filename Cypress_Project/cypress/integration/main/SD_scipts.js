export class SchedulesDetails{

    enterToSchedule(){
        //cy.findAllByText('QA Pavel').cli
        cy.get('.name').contains('QA PavelZ').click()
        cy.wait(4000)
    }
    lockSchedules(){
        cy.get('.actions-header-item-left > .mat-warn').click()
        cy.get('.dialog-actions > .btn').click()
        cy.wait(3000)
        cy.percySnapshot('beforeProjection')
    }
    projection(){
        cy.get(':nth-child(2) > .btn > .mat-button-wrapper').click()
        cy.get('.clearfix > .actions > .btn').click()

        /*cy.route('POST', 'https://develop.auroravts.com/uat/est_int/api/v1/schedule/averages/get_legend_averages')
        .as('get_legend_averages')
        
        cy.wait('@get_legend_averages').then((xhr) => {
      expect(xhr.status).to.equal(200);
    })*/
    cy.route({
          method: 'POST',
          url: 'https://develop.auroravts.com/uat/est_int/api/v1/schedule/averages/get_legend_averages',
          status: 200,
          Preview: {
            'reportType': 'M'
          }
        }).as('getUserProfile');
        cy.wait(400000)
        cy.percySnapshot('beforeProjection')
    }
        
}
export default SchedulesDetails