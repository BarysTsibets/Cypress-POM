/// <reference types = "cypress"/>

describe('End to end test', function(){

    it('Add to cart full flow', function(){
      
        cy.visit('https://demo.nopcommerce.com/')

        cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch")     // type 'Apple MacBook Pro 13-inch' in search field

        cy.get('#small-search-box-form > .button-1').click()               // click on the search button

        cy.get('.product-box-add-to-cart-button').click()                  // add to the cart
                     
        cy.get('#product_enteredQuantity_4').clear().type('2')             //clear and type qyantity 2 

        cy.get('#add-to-cart-button-4').click()                            // click add to the cart button

        cy.get('.content').contains('The product has been added to your ') //verification of success messge

        cy.get('.close').click()                                           //close header notification window                     

        cy.get('.cart-label').click()                                        // go to the shopping cart

        cy.get('.product-name').should('contain','Apple MacBook Pro 13-inch') //assert name of the product
        cy.get('.product-unit-price').should('contain','$1,800.00')           //assert price of the product

    })
})