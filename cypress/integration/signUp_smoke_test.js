/// <reference types = "cypress"/>
import CreateAnAccount from "../pages/create_an_account_page"

describe ('SignUp test suit', function(){

        before(function(){
            cy.fixture('example').then(function(data){
                this.data = data
            })
        })
        
        it('Sign UP SMOKE TEST', function(){   
        const ca =new CreateAnAccount()
        
        cy.visit(this.data.baseURL)                                                         // open Main Page

        ca.goToSignIn().should('be.visible').click()                                        // go to SignIn Page
        //cy.get('.login').should('be.visible').click()
     
        ca.enterEmailToCreateAccount(this.data.test_signUP_email)
        //cy.get('#email_create').clear().type('fakeemail123@gmail.com')                   //input email to start create account
        
        ca.clickCreateAnAccountBtn()
        //cy.get('#SubmitCreate > span').click()
        
        cy.wait(8000)
        ca.CreateAnAccountTextPresented().should('contain', 'Create an account')          // 'CREATE AN ACCOUNT' text presented
        //cy.get('.page-heading').should('contain', 'Create an account')   
                       
        ca.MrRadiobutton().should('not.be.checked').click()
        //cy.get('#id_gender1').should('be.visible').should('not.be.checked').click()     // Click radiobutton 'Mr' 
        
        ca.fillFirstName(this.data.f_name)
        //cy.get('#customer_firstname').clear().type('Bob')                               // input customer 'First Name"
        
        ca.fillLastName(this.data.l_name)
        //cy.get('#customer_lastname').clear().type('Marley')                             // input customer 'Last Name"
        
        ca.emailPlaceholder().should('have.value', this.data.test_signUP_email)                  //verify email placeholder

        ca.fillPassword(this.data.password)
        //cy.get('#passwd').clear().type('123456')                                        //input password

        ca.selectDay('27').should('have.value', '27') 
        //cy.get('#days').select('27').should('have.value', '27')  
        ca.selectmonth('3')  
        //cy.get('#months').select('2')
        ca.selectYear('2000') 
        //cy.get('#years').select('1995')

        ca.ChecknewsletterCheckBox().should('be.checked').and('have.value', '1')
        //cy.get('#newsletter').check().should('be.checked').and('have.value', '1')      //newsletter checkbox

        ca.CheckSpecialOfferCheckbox().should('be.checked').and('have.value', '1')
        //cy.get('#optin').check().should('be.checked').and('have.value', '1')           //special offer check box

        ca.fillCompanyName(this.data.company_name)
        //cy.get('#company').clear().type('ABC company')                                 // input Company name
        
        ca.fillCompanyAddress1(this.data.test_address1)
        //cy.get('#address1').clear().type('100 hollywood blvd, 90028')                  //inpyt Company adress
        
        ca.fillCompanyAddress2(this.data.test_address2)
        //cy.get('#address2').clear().type('suit 500')                                   //inpyt Company suit

        ca.fillCompanyCity(this.data.test_city)
        //cy.get('#city').clear().type('Los Angeles')                                    //inpyt Company City
        
        ca.selectState('2').should('contain.value', '2') 
        //cy.get('#id_state').select('2').should('contain.value', '2')                   // Select State 'Alaska'
        
        ca.fillPostCode(this.data.test_zip)
        //cy.get('#postcode').clear().type('90028')                                      //inpyt Zip Code

        ca.checkPreselectedCountry().should('have.value', '21')
        //cy.get('#id_country').should('have.value', '21')                               // Check that Country preselected as United States

        ca.fillAdditionalInfo('Hello world')
        //cy.get('#other').clear().type('Hello World')                                   //type additional information
        
        ca.fillHomePhone(this.data.test_home_phone)
        //cy.get('#phone').clear().type('323 12345678')                                  //type Home Phone
        
        ca.fillMobilePhone(this.data.test_mobile_phone)
        //cy.get('#phone_mobile').clear().type('323 12345678')                           //type Mobile phone

        ca.fillAliasAddress().should('have.value', 'My address').clear().type('test text')
        //cy.get('#alias').should('have.value', 'My address').clear().type('test text')

        cy.get(ca.registerBtn).should('be.visible').click()
        //cy.get('#submitAccount > span').should('be.visible').click()                   //click Register button

        cy.get('.page-heading').should('have.text', 'My account')
        cy.title().should('eq', 'My account - My Store')                               // Account Created Page verification

    })
})