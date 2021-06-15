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

        cy.signIn_and_go_to_MainPage(this.data.test_signIn_email, this.data.password)      //Log In and go to Main page flow 
        //cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').realHover()
        cy.contains('Dresses').realHover()                                      //hover over Dresses
        cy.contains('Evening Dresses').click({force:true})                      // click on Evening Dresses in appeared window

        ptc.dress_Product().click()                                             //Select Item
        //cy.get('.right-block > h5 > .product-name').click()  

        ptc.increase_Prod_Qty_By_One()                                          //increase Qty of product (+1)
        //cy.get('.button-plus > span').click()               

        ptc.size_Drop_Down_Menu().select('M').should('have.value', '2')        // select M size from Drop Down
        //cy.get('#group_1').select('M').should('have.value', '2')   

        ptc.change_Product_Color()                                             //select Pink color
        //cy.get('#color_24').click()   

        ptc.pink_Dress_Img().should('be.visible')                              // Img with Pink Dress presented
        //cy.get('#thumb_11').should('be.visible')   

        ptc.click_Add_to_Cart_Btn()                                            // Click "Add to Cart" Button
        //cy.get('.exclusive > span').click()       

        ptc.click_process_to_Checkout_Btn()                                    // click Process CheckOut Button
        //cy.get('.button-medium > span').click()   

                    //Assertions//
        cy.title().should('eq', 'Order - My Store')                            // assert cart page title 

        cy.get(ptc.product_in_cart).should('be.visible')
    })
    
    it.only('CheckOut Smoke Test', function(){

                        //Add item to the cart flow
        cy.signIn_and_go_to_MainPage(this.data.test_signIn_email, this.data.password)      //Log In and go to Main page flow
        cy.contains('Dresses').realHover()                                      //hover over Dresses
        cy.contains('Evening Dresses').click({force:true})                      // click on Evening Dresses in appeared window
        ptc.dress_Product().click()                                             //Select Item
        ptc.increase_Prod_Qty_By_One()                                          //increase Qty of product (+1)
        ptc.size_Drop_Down_Menu().select('M').should('have.value', '2')        // select M size from Drop Down
        ptc.change_Product_Color()                                             //select Pink color
        ptc.pink_Dress_Img().should('be.visible')                              // Img with Pink Dress presented
        ptc.click_Add_to_Cart_Btn()                                            // Click "Add to Cart" Button
        ptc.click_process_to_Checkout_Btn()                                    // click Process CheckOut Button
                    //Assertions//
        cy.title().should('eq', 'Order - My Store')                            // assert cart page title 
        cy.get(ptc.product_in_cart).should('be.visible')

                       //Check Out flow
        cy.scrollTo('bottom')
        cy.get('.cart_navigation > .button > span').should('be.visible').click()           //click Process To CheckOuy Button
        cy.get('.navigation_page').should('have.text', 'Addresses').should('be.visible')   //assertr that Adress page presented

        cy.scrollTo('bottom')                                                       
        cy.get('.cart_navigation > .button > span').should('be.visible').click()           //click Process To CheckOuy Button    
        cy.get('.navigation_page').should('have.text','Shipping').should('be.visible')     //assertr that Shipping page presented

        cy.get('.cart_navigation > .button > span').should('be.visible').click()            //click Process To CheckOuy Button withoutterms agreement
        cy.contains('You must agree to the terms of service before continuing.').should('be.visible')

        //cy.get('#cgv').check().should('be.checked')                                        //check Delivery Terms and Conditions checkbox
        //cy.get('.cart_navigation > .button > span').should('be.visible').click()           //click Process To CheckOuy Button  

    })



})