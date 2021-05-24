/// <reference types = "cypress"/>
import SignUp from "../pages/signUp_page"
import SignIn from "../pages/sign_in_page"

describe ('SignIn test suit', function(){

    //const sUp =new SignUp()
    const sIn = new SignIn()

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('SignIn SMOKE TEST', function(){
        
      
        cy.visit(this.data.signInPage)                                            // open SignIn Page

        sIn.enterEmailToSignIn(this.data.test_signIn_email)                       //fill email in SignIn field


        sIn.enterPasswordToSignIn(this.data.password)                             //fill password in SignIn field

        cy.get(sIn.signInBtn).should('be.visible').click()                        //click SignIn Button


        cy.title().should('be.eq', 'My account - My Store')

        cy.get('.page-heading').should('have.text', 'My account')                  

        sIn.consumerName().should('have.text', this.data.full_name)               //assert consumer name after SignIn
        
    })



    it('SignIn: go to Order_History_and_details',function(){

        cy.visit(this.data.signInPage)                                               // open SignIn Page
        sIn.enterEmailToSignIn(this.data.test_signIn_email)                          //fill email in SignIn field
        sIn.enterPasswordToSignIn(this.data.password)                                //fill password in SignIn field
        cy.get(sIn.signInBtn).should('be.visible').click()                           //click SignIn Button
      
        cy.contains(sIn.Order_history_and_details_Btn).should('be.visible').click()  //go to Order_history_and_details page

        cy.title().should('eq', sIn.Order_History_PageTitle)                         //assert opened page title

    })

    it('SignIn: go to Order_History_and_details',function(){

        cy.visit(this.data.signInPage)                                               // open SignIn Page
        sIn.enterEmailToSignIn(this.data.test_signIn_email)                          //fill email in SignIn field
        sIn.enterPasswordToSignIn(this.data.password)                                //fill password in SignIn field
        cy.get(sIn.signInBtn).should('be.visible').click()                           //click SignIn Button
      

        cy.contains(sIn.Order_history_and_details_Btn).should('be.visible').click()  //go to Order_history_and_details page

        cy.title().should('eq', sIn.Order_History_PageTitle)                         //assert opened page title

    })


    it('SignIn: go to My_Credit_Slips',function(){

        cy.visit(this.data.signInPage)                                               // open SignIn Page
        sIn.enterEmailToSignIn(this.data.test_signIn_email)                          //fill email in SignIn field
        sIn.enterPasswordToSignIn(this.data.password)                                //fill password in SignIn field
        cy.get(sIn.signInBtn).should('be.visible').click()                           //click SignIn Button
      

        cy.contains(sIn.My_Credit_Slips_Btn).should('be.visible').click()            //go to My_credit_slip page

        cy.title().should('eq', sIn.My_credit_slips_PageTitle)                         //assert My_credit_slip page title

    })

    it.only('SignIn: go to My_Address',function(){

        cy.visit(this.data.signInPage)                                               // open SignIn Page
        sIn.enterEmailToSignIn(this.data.test_signIn_email)                          //fill email in SignIn field
        sIn.enterPasswordToSignIn(this.data.password)                                //fill password in SignIn field
        cy.get(sIn.signInBtn).should('be.visible').click()                           //click SignIn Button
      

        cy.contains(sIn.My_addresses_Btn).should('be.visible').click()               //go to My_address_page page

        cy.title().should('eq', sIn.My_address_PageTitle)                            //assert My_address page title

        cy.get('.last_item').should('contain', this.data.company_name)               //assert consumer data at My Address page
                            .and('contain', this.data.l_name)
                            .and('contain', this.data.test_city)

        cy.contains(' Back to your account').should('be.visible').click()             //return to My Account page
    })

})