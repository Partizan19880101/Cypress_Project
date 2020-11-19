
import '@percy/cypress'
import {loginPage} from '../main/login_scripts'
import CreateSchedules from '../main/schedules_scripts'
import SchedulesDetails from '../main/SD_scipts'

describe('Schedules Page', function() {
    before(() => {
        cy.server()

        loginPage.loginOnTheEstimator('sysadmin', '!amcnbi321')
        loginPage.checkTitle()
        
        const createSchedules = new CreateSchedules()
        createSchedules.saveAsMaster()
        createSchedules.enterName('QA PavelZ')
        createSchedules.choosePeriod()
        createSchedules.clickSave()
    })
    it('Projection Entire File', function() { 
        const schedulesDetails = new SchedulesDetails()
        
        schedulesDetails.enterToSchedule()
        schedulesDetails.lockSchedules()
        schedulesDetails.projection() 
    })


    after(() => {
        //const createSchedules = new CreateSchedules()
        //createSchedules.deleteafterSearch()
        ///uat/est_int/api/v1/schedule/averages/get_legend_averages
        
    })
})
