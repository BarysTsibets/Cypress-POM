/// <reference types = "cypress"/>

describe('Hooks suit', function(){

//before, after, beforeEach, afterEach methods should stay in describe section

    before(() => {
       // runs once before all tests in the block
        cy.log('------ This is Before method ------')
      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log('------ This is beforeEach method ------')
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log('------ This is afterEach method ------')
      })
    
      after(() => {
        // runs once after all tests in the block
        cy.log('------ This is After method ------')
      })


  
// testing section

    it('Search block tests', function()
    {
         cy.log('******* This is Search test ******')   
    })

    it('Advanced search block tests', function()
    {
         cy.log('******* This is Advanced Search test ******')   
    })

    it('Listing Prods block tests', function()
    {
         cy.log('******* This is Listing Prods block test ******')   
    })
})