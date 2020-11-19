import '@percy/cypress'
import LoginPage from '../main/login_scripts_Czech'

describe('Login', function(){ 
    this.beforeEach(() => {
        const log = new LoginPage()
        log.visit()
        
        cy.wait(2000)
        
    })

    it('Valid login Page', function() {
        const log = new LoginPage()
            cy.wait(3000)
            log.usernameField('sysadmin')
            log.passwordFields('!amcnbi321')
            log.loginButton()
            cy.wait(5000)
            cy.title().should('be.equal', 'Estimator International')
            cy.wait(3000)
            cy.percySnapshot()
      })
      it('InValid login Page', function() {
        const log = new LoginPage()
            cy.wait(3000)
            log.usernameField('sysadmin')
            log.passwordFields(' ')
            log.loginButton()
            cy.title().should('be.equal', 'Login')
      })
      it('InValid login Page', function() {
        const log = new LoginPage()
            cy.wait(3000)
            log.usernameField(' ')
            log.passwordFields('!amcnbi321')
            log.loginButton()
            cy.title().should('be.equal', 'Login')
      })
    })
