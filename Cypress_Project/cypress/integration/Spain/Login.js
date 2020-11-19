import '@percy/cypress'
import LoginPage from '../main/login_scripts'

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
            cy.wait(8000)
            // cy.server()
            // cy.route('GET', '/api/v1/user/get_user_info').as('get_user_info')
            // cy.route('POST', '/api/v1/schedules/get_schedules').as('get_schedules')
            // cy.wait(['@get_user_info', '@get_schedules'])
            // .should(data => {
            //     data.forEach (item => expect(item.stats).to.equal(200))
            //     return true
            // })
          

        
            cy.wait(8000)
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
