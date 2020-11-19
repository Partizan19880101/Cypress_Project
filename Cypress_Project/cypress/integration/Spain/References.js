import '@percy/cypress'
import {loginPage} from '../main/login_scripts'
import Reference from '../main/refernces_scripts'


describe('Reference Page', function() {

    this.beforeEach(() => {
        loginPage.loginOnTheEstimator('sysadmin', '!amcnbi321')
        loginPage.checkTitle()
    })
    it('Create Reference', function() {
        const references = new Reference()
        references.visitReferencesPage()
        references.addReference('12 STRONG', Math.floor(Math.random() * 100))
        references.findReference('12 STRONG')
        references.deleteReference('12 STRONG')
    })
    it('Create Reference', function() {
        const references = new Reference()
        var year = Math.floor(Math.random() * 100);
        references.visitReferencesPage()
        references.addReference('12 STRONG', year)
        references.findReference('12 STRONG', year)
        references.addLinks('fear', 'FEAR THE WALKING DEAD')
        references.actualsPage()
        references.deleteReference('12 STRONG')
    })  
})
