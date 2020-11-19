
import '@percy/cypress'
import {loginPage} from '../main/login_scripts'
import CreateSchedules from '../main/schedules_scripts'


describe('Schedules Page', function() {
    this.beforeEach(() => {
        
        loginPage.loginOnTheEstimator('sysadmin', '!amcnbi321')
        loginPage.checkTitle()
        })
    
    it('Schedules Page', function() {
        const createSchedules = new CreateSchedules()
        createSchedules.saveAsMaster()
        createSchedules.enterName('QA Pavel Test')
        //createSchedules.enterTag()
        createSchedules.choosePeriod()
        createSchedules.clickSave()
        cy.percySnapshot()
        createSchedules.deleteSchedule()
    })
   
    it('Search by schedule type', function() {
        const createSchedules = new CreateSchedules()
        createSchedules.saveAsMaster()
        createSchedules.enterName('QA P')
        createSchedules.choosePeriod()
        //createSchedules.enterTag()
        createSchedules.clickSave()
        
        //createSchedules.searchTag()
        createSchedules.searchScheduleType()
        createSchedules.appluSearch()
        createSchedules.deleteafterSearch()
    })
    it('Search by schedule type', function() {
        const createSchedules = new CreateSchedules()
        createSchedules.saveAsMaster()
        createSchedules.enterName('QA Pa')
        createSchedules.choosePeriod()
        createSchedules.clickSave()
        
        
        createSchedules.deleteafterSearch()
    })
})
