
import '@percy/cypress'
import {loginPage} from '../main/login_scripts'
import ReportsPage from '../main/reports_scripts'


describe('Report Page', function() {
    before(() => {
        
        loginPage.loginOnTheEstimator('sysadmin', '!amcnbi321')
        loginPage.checkTitle()
        })
    
    it('Generate Report', function() {
        const generateReport = new ReportsPage()
        
        generateReport.visitReportPage()
        generateReport.selectDemoblock()
        generateReport.selectTSV()
        generateReport.selectSchedule()
        generateReport.selectPeriod()
        generateReport.gererateReport()
        cy.percySnapshot()
    })
})
