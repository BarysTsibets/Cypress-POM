/// <reference types = "cypress"/>

describe('Custom Command Suit', function(){

    it('LogIn flow ', function()
    {
        //valid credentials - POSITIVE test
       cy.login_function('admin@yourstore.com','admin')      // login_function stored in support/commands.js
       cy.title().should('be.eq', 'Dashboard / nopCommerce administration')    

        // invalid email + valid password - NEGATIVE test
       cy.login_function('abc@yourstore.com','admin')      // login_function stored in support/commands.js
       cy.title().should('not.be.eq', 'Dashboard / nopCommerce administration')   
       cy.title().should('eq','Your store. Login')

        // valid email + invalid password - NEGATIVE test
       cy.login_function('admin@yourstore.com','admin123')      // login_function stored in support/commands.js
       cy.title().should('not.be.eq', 'Dashboard / nopCommerce administration') 
       cy.title().should('eq','Your store. Login')
    })


    it('Add customer test', function()                       // Login + add customer flow
    {
        // login flow
        cy.login_function('admin@yourstore.com','admin')      // Login function stored in support/commands.js

        //add customer actions
        cy.log('Adding customer actions *********')
    })

    it('Edit customer test', function()                      // Login + Edit customer flow
    {
        // login flow
        cy.login_function('admin@yourstore.com','admin')      // Login function stored in support/commands.js

        //Edit customer actions
        cy.log('Edit customer actions *********')
    })

    it('Delete customer test', function()                     // Login + Delete customer flow
    {
        // login flow
        cy.login_function('admin@yourstore.com','admin')      // Login function stored in support/commands.js

        //Delete customer actions
        cy.log('Delete customer actions *******')
    })
})