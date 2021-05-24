/// <reference types = "cypress"/>

class SignIn{


signInPageEmailField = '#email'
signInPagePasswordField = '#passwd'
signInBtn = '#SubmitLogin > span'
user_name = '.account > span'
Order_history_and_details_Btn = 'Order_history_and_details'
My_credit_slips_Btn = 'My_credit_slips'
My_addresses_Btn = 'My addresses'
My_personal_information_Btn = 'My personal information'
My_wishlists_btn = 'My wishlists'
Home_Btn = 'li > .btn > span'



enterEmailToSignIn(email){
    return cy.get(this.signInPageEmailField).clear().type(email) 
}

enterPasswordToSignIn(pasw){
    return cy.get(this.signInPagePasswordField).clear().type(pasw)
}

consumerName(){
    return cy.get(this.user_name)
}

click_Order_history_and_details(){
    return cy.contains(this.Order_history_and_details_Btn).click()
}

click_My_credit_slips(){
    return cy.contains(this.My_credit_slips_Btn).click()
}

click_My_addresses(){
    return cy.contains(this.My_addresses_Btn).click()
}

click_My_personal_information(){
    return cy.contains(this.My_personal_information_Btn).click()
}

click_My_wishlists(){
    return cy.contains(this.My_wishlists_btn).click()
}

click_Home(){
    return cy.get(this.Home_Btn).click()
}

}

export default SignIn