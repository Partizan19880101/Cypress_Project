
export class LoginPage{
    visit(){
        cy.visit("") //Open URL location
    }
    usernameField(value){
        const field = cy.get('#mat-input-0')
        field.clear()
        field.type(value)
        return this
    }
    passwordFields(value){
        const field = cy.get('#mat-input-1')
        field.clear()
        field.type(value)
        return this
    }
    loginButton(){
        const button = cy.get('.mat-button-wrapper')
        button.click()
    }
    loginOnTheEstimatorCzech(login, password) {
        cy.visit("")
        cy.wait(5000)
        cy.get('#mat-input-0').type(login)
        cy.get('#mat-input-1').type(password)
        cy.get('.mat-button-wrapper').click()
        cy.wait(5000)
        cy.wait(2000)
        cy.get('.button-text').click()
        cy.findAllByText('Change Network').click()
        cy.wait(2000)
        cy.findAllByText('SPAIN').click()
        cy.wait(2000)
        cy.get('.mat-option-text').contains('CZECH').click()
        cy.findAllByText('AMC').click()
        cy.wait(2000)
        cy.get('.mat-button-wrapper').contains(' OK ').click()
        cy.wait(2000)
    }
    checkTitle(){
        cy.wait(5000)
        cy.title().should('be.equal', 'Estimator International')
        
    }
}
export default LoginPage
     export const loginPage = new LoginPage();
       