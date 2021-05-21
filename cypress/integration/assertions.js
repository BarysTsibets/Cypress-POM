/// <reference types = "cypress"/>

it('learning assertions', function(){

cy.visit('https://example.cypress.io/')
cy.contains('get').click()

cy.get('#query-btn',{timeout:6000})
    .should('contain', 'Button')
    .should('have.id','query-btn')
    .should('be.visible')
    .should('be.enabled')

cy.get('.container > p')
    .should('be.visible')
    .should('contain', "DOM")

    
    
///cy.get('#query-btn').invoke('attr', 'id').should('equal', 'query-btn')

//cy.get('#query-btn').should('contain', 'Button')
    //.and('have.class', 'query-btn')



})