/// <reference types = "cypress"/>
import CreateAnAccount from "../pages/create_an_account_page"

describe ('SignIn test suit', function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('SignIn SMOKE TEST', function(){
        

        cy.visit('http://automationpractice.com/index.php')
        const ca =new CreateAnAccount()
        
        cy.visit(this.data.baseURL)                                                         // open Main Page

        ca.goToSignIn().should('be.visible').click()                                        // go to SignIn Page
        //cy.get('.login').should('be.visible').click()

        cy.get('#email').clear().type(this.data.test_signIn_email)  // fill email in SignIn field

        cy.get('#passwd').clear().type(this.data.password)

        cy.get('#SubmitLogin > span').should('be.visible').click()

        cy.title().should('be.eq', 'My account - My Store')
        cy.get('.page-heading').should('have.text', 'My account')
        cy.get('.account > span').should('have.text', 'Bob Marley')
        

    })
})