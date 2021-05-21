/// <reference types = "cypress"/>

describe('Fixtures Suit', function(){

    // fixture block (fixture/example - contain email and password data)
    before(function(){
        cy.fixture('example').then(function(data){                           // example - folder, data - variable
            this.data = data                                                 //initialization of 'data' variable
        })
    })


    // "Login to the admin page" flow 
    it('Fixtures Demo test', function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.get('#Email').clear().type(this.data.email)                                                     // email stored in this.data.email variable
        cy.get('#Password').clear().should('be.visible').should('be.enabled').type(this.data.password)     // password stored in this.data.password variable
        cy.get('.button-1').should('be.visible').click()
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
    })
})