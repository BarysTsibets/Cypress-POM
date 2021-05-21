/// <reference types = "cypress"/>

describe('Navigation Suit', function(){

    it('back/forward actions', function()
    {
        cy.visit('https://demo.nopcommerce.com/')                 //Home page
        cy.title().should('eq', 'nopCommerce demo store')         // assert Home page title

        cy.get('.ico-register').contains('Reg').click()                // go to Reg Page
        cy.title().should('eq', 'nopCommerce demo store. Register')    // assert Reg page title 

        cy.go('back')                                                  //back to Home page
        cy.title().should('eq', 'nopCommerce demo store')

        cy.go('forward')                                                //forward to Reg page
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.go(-1)   //back to Home page

        cy.go(1)   //forward to Reg page

    })

})