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

        cy.visit(this.data.baseURL)                                                                       //Open main page

        cu.click_Contact_Us()                                                                             // click on the Contact Us link                         

        cy.title().should('eq', cu.contact_Us_title)                                                      // assert 'Contact Us' page title

        cy.get(cu.contact_BreadCrumb_Btn).should('be.visible').and('have.text', cu.contact_BreadCrumb_Text)     //Assert that 'contact' text shown at the breadcrumbs

        cu.select_CustomerService_DropDown().should('have.value', '2')                                     // select "customer service" from drop down menu     

        cy.contains(cu.customer_Service_ToolTip).should('be.visible')                                      // assert that specific tool tip is presented

        cu.select_Webmaster_DropDown().should('have.value', '1')                                           // select 'Webmaster' from drop down                

        cy.contains(cu.webmaster_Service_ToolTip).should('be.visible')                                     // assert that specific tool tip is presenteds

        cu.enter_Email(this.data.test_signIn_email)                                                        //fill email adress          

        cu.enter_Order_Reference(this.data.order_Number)                                                   //fill order reference text                                               

        cu.enter_Message(cu.message_Text)                                                                  //fill any message                                             

        cy.get(cu.submit_Btn).should('be.visible').should('be.enabled').click()                            //click Submit button

        cy.contains(cu.success_Message_Text).should('be.visible')                                          //assert that success message displayed
    })
})