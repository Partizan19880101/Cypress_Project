import '@percy/cypress'
import {loginPage} from '../main/login_scripts_Czech'
import Reference from '../main/refernces_scripts'


describe('Reference Page', function() {

    this.beforeEach(() => {
        loginPage.loginOnTheEstimatorCzech('sysadmin', '!amcnbi321')
        loginPage.checkTitle()
    })
    it('Create Reference', function() {
        const references = new Reference()
        references.visitReferencesPage()
        references.addReference('10th & Wolf')
        references.findReference('10th & Wolf')
        references.deleteReference('10th & Wolf')
    })
    it('Create Reference', function() {
        const references = new Reference()
        references.visitReferencesPage()
        references.addReference('10th & Wolf')
        references.findReference('10th & Wolf')
        references.addLinks('fear', 'Fear The Walking Dead')
        references.actualsPage()
        references.deleteReference('10th & Wolf')
    })  
})
