/// <reference types = "cypress"/>

describe('Check Out Test Suit', function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })


    it('Check Out Smoke Test', function(){

        cy.signIn_and_go_to_MainPage(this.data.test_signIn_email, this.data.password)
        

    })

})