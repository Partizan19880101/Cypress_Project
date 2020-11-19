
export class LoginPage{
    visit(){
        cy.visit("https://develop.auroravts.com/uat/est_int/login") //Open URL location
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
    loginOnTheEstimator(login, password) {
        cy.visit("https://develop.auroravts.com/uat/est_int/login")
        cy.wait(5000)
        cy.get('#mat-input-0').type(login)
        cy.get('#mat-input-1').type(password)
        cy.get('.mat-button-wrapper').click()
        cy.wait(5000)
    }
    checkTitle(){
        cy.wait(5000)
        cy.title().should('be.equal', 'Estimator International')
        
    }
}
export default LoginPage
     export const loginPage = new LoginPage();
       