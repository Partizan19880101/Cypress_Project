
import '@percy/cypress'
import LoginPage from '../main/login_scripts_Czech'
import CreateSchedules from '../main/schedules_scripts'
import Calibration from '../main/calibration_scripts'

describe('Calibration', function() {
    before(() => {
        
        loginPage.loginOnTheEstimatorCzech('sysadmin', '!amcnbi321')
        loginPage.checkTitle()
        
        const createSchedules = new CreateSchedules()
        createSchedules.saveAsPromo()
        createSchedules.enterName('PZ Pavel')
        createSchedules.choosePeriod()
        createSchedules.clickSave()
    })
    it('Change Calibration', function() { 
        const calibrations = new Calibration()
        calibrations.enterToSchedule1()
        calibrations.lockSchedules1()
        calibrations.openGlobalCalibration()
    })
    it.only('Change Global Calibration', function() { 
        const calibrations = new Calibration()
        calibrations.enterToSchedule1()
        calibrations.lockSchedules1()
        calibrations.openDaypartCalibration()
    })

    after(() => {
        //const createSchedules = new CreateSchedules()
        //createSchedules.deleteafterSearch()
        
    })
})
