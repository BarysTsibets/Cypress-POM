/// <reference types = "cypress"/>
import ProductToCart from '../pages/product_to_cart_page'


describe('Check Out Test Suit', function(){

    const ptc = new ProductToCart()

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

        ptc.dress_Product().click()                             //Select Item
        //cy.get('.right-block > h5 > .product-name').click()  

        ptc.increase_Prod_Qty_By_One()                          //increase Qty of product (+1)
        //cy.get('.button-plus > span').click()               

        ptc.size_Drop_Down_Menu().select('M').should('have.value', '2')   // select M size from Drop Down
        //cy.get('#group_1').select('M').should('have.value', '2')   

        ptc.change_Product_Color()      //select Pink color
        //cy.get('#color_24').click()   

        cy.get('#thumb_11').should('be.visible')   // Img with Pink Dress presented

        
        cy.get('.exclusive > span').click()       // Click "Add to Cart" Button
        cy.get('.button-medium > span').click()   // click Process CheckOut Button

        cy.title().should('eq', 'Order - My Store')
        cy.get('.cart_description > .product-name > a').should('be.visible')
    })
    

})