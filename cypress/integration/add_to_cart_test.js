
/// <reference types = "cypress"/>

describe('Check Out Test Suit', function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })


    it('Add to Cart Smoke Test', function(){

        //User LogIn first

        cy.signIn_and_go_to_MainPage(this.data.test_signIn_email, this.data.password)
        //cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').realHover()
        cy.contains('Dresses').realHover()
        cy.contains('Evening Dresses').click({force:true})

        cy.get('.right-block > h5 > .product-name').click()  //Select Item

        cy.get('.button-plus > span').click()                //increase Qty to 2

        cy.get('#group_1').select('M').should('have.value', '2')   // select M size from Drop Down

        cy.get('#color_24').click()   //select Pink color

        cy.get('#thumb_11').should('be.visible')   // Img with Pink Dress presented

        
        cy.get('.exclusive > span').click()       // Click "Add to Cart" Button
        cy.get('.button-medium > span').click()   // click Process CheckOut Button

        cy.title().should('eq', 'Order - My Store')
        cy.get('.cart_description > .product-name > a').should('be.visible').and('be.enabled')
    })
    

})