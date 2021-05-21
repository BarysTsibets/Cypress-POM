/// <reference types = "cypress"/>

describe('Alerts Suit', function(){

    it('Alerts', function(){
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()                                     //click on the button to rise alert window
            
        cy.on('window:alert', (str) =>                                  // assert the alert window text message
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
    })

    it('Alerts', function(){

        cy.get('#confirmbtn').click()                                   //click on the button to rise confirmation window
       
        cy.on('window:confirm', (str) =>                                  // assert the confirmation window text message
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
       )
     }
    )
        
})