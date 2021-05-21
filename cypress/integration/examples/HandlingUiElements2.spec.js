/// <reference types = "cypress"/>

describe('UI Elements2 suit', function(){

    it('Hobbies check boxes', function(){

        cy.visit('http://demo.automationtesting.in/Register.html')

        //check checkboxes one by one
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket') 
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')  

        // uncheck checkboxes one by one
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').should('not.be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //check multiply checkboxes
        cy.get('[type="checkbox"]').check(['Hockey', 'Movies'])

    })

    it('Skills Drop Down menu (static)', function(){
        
        cy.get('#Skills').select('APIs').should('have.value', 'APIs')  // Pick something from static drop down menu
    })


    it.only('Multiply options Drop Down menu', function(){

        cy.visit('http://demo.automationtesting.in/Register.html')
        
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Japanese').click()         //Pick multiply options from drop down
        cy.get('.ui-corner-all').contains('India').click()

    })

    it ('Searcheable Drop Down', function(){

        //cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('.select2-selection').click({force:true})             //click on the drop down element
        cy.get('.select2-search__field').type('Jap')                 //type in the searcheable window
        cy.get('.select2-search__field').type('{enter}')             // press "Enter" after typing

    })
})