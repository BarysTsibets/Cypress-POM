// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




//LogIn custom command (function)



Cypress.Commands.add('login_function', (email, password) => {

        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

        cy.get('#Email').clear().type(email)                                                                 // email stored in this.data.email variable
        cy.get('#Password').clear().should('be.visible').should('be.enabled').type(password)                // password stored in this.data.password variable
        cy.get('.button-1').should('be.visible').click()

})


Cypress.Commands.add('signIn_and_go_to_MainPage', (email, password) => {

        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').clear().type(email)
        cy.get('#passwd').clear().type(password)
        cy.get('#SubmitLogin > span').click()
        cy.get('.logo').click()

})