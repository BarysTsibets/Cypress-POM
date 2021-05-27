/// <reference types = "cypress"/>
import ContactUs from "../pages/contact_us_page"

describe('Contact Us Test Suit', function(){

    const cu = new ContactUs()

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })



    it('Contact Us SMOKE TEST', function(){


        cy.visit(this.data.baseURL)                                                    //Open main page

        cu.click_Contact_Us()
        //cy.get('#contact-link').click()                       // click on the Contact Us link   
    
        cy.title().should('eq', cu.contact_Us_title)                                // assert 'Contact Us' page title

        cy.get(cu.contact_Us_title).should('be.visible').and('have.text', cu.contact_BreadCrumb_Text)    //Assert that 'contact' text shown at the breadcrumbs

        cu.select_CustomerService_DropDown().should('have.value', '2')                                     // select "customer service" from drop down menu
        //cy.get('#id_contact').select('Customer service').should('have.value', '2')      


        cy.contains(cu.customer_Service_ToolTip).should('be.visible')           // assert that specific tool tip is presented

        cu.select_Webmaster_DropDown().should('have.value', '1')               // select 'Webmaster' from drop down
        //cy.get('#id_contact').select('Webmaster').should('have.value', '1')                 


        cy.contains(cu.webmaster_Service_ToolTip).should('be.visible')            // assert that specific tool tip is presenteds

        cu.enter_Email(this.data.test_signIn_email)                                  //fill email adress 
        //cy.get('#email').type(this.data.test_signIn_email)            

        cu.enter_Order_Reference(this.data.order_Number)                            //fill order reference text
        //cy.get('#id_order').type('Order #123-456')                                                   


        cy.get('#message').type('Hello World')                                                       //fill any message
        cy.get('#submitMessage').should('be.visible').should('be.enabled').click()                   //click Submit button
        cy.get('.alert').should('be.visible').should('have.text', 'Your message has been successfully sent to our team.')       //assert that success message displayed

    })
})