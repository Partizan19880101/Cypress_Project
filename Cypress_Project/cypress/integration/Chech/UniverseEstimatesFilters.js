import '@percy/cypress'
import {loginPage} from '../main/login_scripts_Czech';
import UniveseEstimatesFilters from '../main/ueFilters_scripts';

describe('Universe Estimates Filters', function() {
    this.beforeEach(() => {
        Cypress.on('fail', (error, runnable) => {
            cy.log('this single test failed, but continue other tests');
            // don't stop!
            // throw error; // marks test as failed but also makes Cypress stop
        });
        
        loginPage.loginOnTheEstimatorCzech('sysadmin', '!amcnbi321')
        loginPage.checkTitle()
        cy.wait(3000)
        })
    
    it('!Create+Search+Edit Universe Estimates', function() {
        const UniverseEstimatesFilters = new UniveseEstimatesFilters()
        
        UniverseEstimatesFilters.visitUEPage()
        UniverseEstimatesFilters.clickCloneButton()
        UniverseEstimatesFilters.searchURGroups()
        UniverseEstimatesFilters.editUEGroups()
        cy.percySnapshot()
        UniverseEstimatesFilters.deleteEditUEGroups()
    })     
    
    it('!Universe Estimates Search UE', function() {
        const UniverseEstimatesFilters = new UniveseEstimatesFilters()

        UniverseEstimatesFilters.visitUEPage()
        cy.get('.selected > .mat-list-item-content').click()
        UniverseEstimatesFilters.searchUE()
    })
    it('!Export Universe Estimates', function() {
        const UniverseEstimatesFilters = new UniveseEstimatesFilters()

        UniverseEstimatesFilters.visitUEPage()
        UniverseEstimatesFilters.exportUE()
    })
    it('!Import Universe Estimates', function() {
        const UniverseEstimatesFilters = new UniveseEstimatesFilters()
        UniverseEstimatesFilters.visitUEPage()
        UniverseEstimatesFilters.clickCloneButton()
        UniverseEstimatesFilters.importUE()
        UniverseEstimatesFilters.deleteUEGroups()
    })
    it('!Edit Universe Estimates', function() {
        const UniverseEstimatesFilters = new UniveseEstimatesFilters()
        UniverseEstimatesFilters.visitUEPage()
        UniverseEstimatesFilters.clickCloneButton()
        cy.percySnapshot()
        UniverseEstimatesFilters.searchURGroups()
        UniverseEstimatesFilters.editUE()
        UniverseEstimatesFilters.deleteUEGroups()
    })
    it('Clone Universe Estimates', function() {
        const UniverseEstimatesFilters = new UniveseEstimatesFilters()
        //no
        UniverseEstimatesFilters.visitUEPage()
        UniverseEstimatesFilters.clickCloneButton()
        //UniverseEstimatesFilters.cloneUE()
        UniverseEstimatesFilters.deleteUEGroups()
    })
    it('Universe Estimates Filters Reset', function() {
        const UniverseEstimatesFilters = new UniveseEstimatesFilters()
        
        UniverseEstimatesFilters.visitUEPage()
        UniverseEstimatesFilters.selectYear()
        UniverseEstimatesFilters.selectQuater()
        cy.percySnapshot()
        UniverseEstimatesFilters.selectResedrButton()
    })
    it('Universe Estimates Filters Apply', function() {
        const UniverseEstimatesFilters = new UniveseEstimatesFilters()
        
        UniverseEstimatesFilters.visitUEPage()
        UniverseEstimatesFilters.selectYear()
        UniverseEstimatesFilters.selectQuater()
        UniverseEstimatesFilters.selectApplyButton()
    })
})
