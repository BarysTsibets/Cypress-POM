/// <reference types = "cypress"/>
import CreateAnAccount from "../pages/create_an_account_page"
import faker from 'faker'

//text example

describe ('Create account test suit', function(){

        it('Create An Account Smoke test', function(){
            
        //const my_faker = faker.internet.email()
        const ca =new CreateAnAccount()
        
        ca.visitSignInPage('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        //cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
     
        
        ca.enterEmailToCreateAccount('fakeemail123@gmail.com')
        //cy.get('#email_create').clear().type('fakeemail123@gmail.com')              //input email to start create account
        
        ca.clickCreateAnAccountBtn()
        //cy.get('#SubmitCreate > span').click()

        ca.CreateAnAccountTextPresented().should('contain', 'Create an account')          // 'CREATE AN ACCOUNT' text presented
        //cy.get('.page-heading').should('contain', 'Create an account')   
                       
        ca.MrRadiobutton().should('be.visible').should('not.be.checked').click()
        //cy.get('#id_gender1').should('be.visible').should('not.be.checked').click()     // Click radiobutton 'Mr' 
        
        ca.fillFirstName('Bob')
        //cy.get('#customer_firstname').clear().type('Bob')                               // input customer 'First Name"
        
        ca.fillLastName('Marley')
        //cy.get('#customer_lastname').clear().type('Marley')                             // input customer 'Last Name"
        

        ca.fillPassword('123456')
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

        ca.fillCompanyName('ABC company')
        //cy.get('#company').clear().type('ABC company')                                 // input Company name
        
        ca.fillCompanyAddress1('100 hollywood blvd, 90028')
        //cy.get('#address1').clear().type('100 hollywood blvd, 90028')                  //inpyt Company adress
        
        ca.fillCompanyAddress2('suit 500')
        //cy.get('#address2').clear().type('suit 500')                                   //inpyt Company suit

        ca.fillCompanyCity('Los Angeles')
        //cy.get('#city').clear().type('Los Angeles')                                    //inpyt Company City
        
        ca.selectState('2').should('contain.value', '2') 
        //cy.get('#id_state').select('2').should('contain.value', '2')                   // Select State 'Alaska'
        
        ca.fillPostCode('90028')
        //cy.get('#postcode').clear().type('90028')                                      //inpyt Zip Code

        ca.checkPreselectedCountry().should('have.value', '21')
        //cy.get('#id_country').should('have.value', '21')                               // Check that Country preselected as United States

        ca.fillAdditionalInfo('Hello world')
        //cy.get('#other').clear().type('Hello World')                                   //type additional information
        
        ca.fillHomePhone('323 12345678')
        //cy.get('#phone').clear().type('323 12345678')                                  //type Home Phone
        
        ca.fillMobilePhone('323 12345678')
        //cy.get('#phone_mobile').clear().type('323 12345678')                           //type Mobile phone


        ca.fillAliasAddress().should('have.value', 'My address').clear().type('test text')
        //cy.get('#alias').should('have.value', 'My address').clear().type('test text')

        cy.get(ca.registerBtn).should('be.visible').click()
        //cy.get('#submitAccount > span').should('be.visible').click()                   //click Register button


        cy.title().should('eq', 'My account - My Store')                               // Account Created Page verification

    })
})