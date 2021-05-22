/// <reference types = "cypress"/>

class CreateAnAccount{

signInButton = '.login'
loginPageCreateAcountField = '#email_create'
CreateAnAccountButton = '#SubmitCreate > span'
CreateAnAccountText = '.page-heading'
Mr = '#id_gender1'
emailPlaceHolder = '#email'
FirstNameField = '#customer_firstname'
LastNameField = '#customer_lastname'
PasswordField = '#passwd'
DayDropDown = '#days'
monthDropDown = '#months'
yearDropDown = '#years'
newsletterCheckBox = '#newsletter'
specialOfferCheckBox = '#optin'
CompanyField = '#company'
Adress1Field = '#address1'
Adress2Field = '#address2'
CompanyCityField = '#city'
stateDropDown = '#id_state'
postCodeField = '#postcode'
Country = '#id_country'
additionalInfoField = '#other'
homePhoneNumber = '#phone'
mobilePhoneNumber = '#phone_mobile'
aliasAddress = '#alias'
registerBtn = '#submitAccount > span'

    


visitSignInPage(url){
   return cy.visit(url)
}

goToSignIn(){
    return cy.get(this.signInButton)
}

enterEmailToCreateAccount(email){
    return cy.get(this.loginPageCreateAcountField).clear().type(email) 
}

clickCreateAnAccountBtn(){
    return cy.get(this.CreateAnAccountButton).click()
}

CreateAnAccountTextPresented(){
    return cy.get(this.CreateAnAccountText)
}

MrRadiobutton(){
    return cy.get(this.Mr)
}

emailPlaceholder(){
    return cy.get(this.emailPlaceHolder)
}

fillFirstName(fname){
    return cy.get(this.FirstNameField).clear().type(fname)
}

fillLastName(lname){
    return cy.get(this.LastNameField).clear().type(lname)
}

fillPassword(pasw){
    return cy.get(this.PasswordField).clear().type(pasw)
}
selectDay(day){
    return cy.get(this.DayDropDown).select(day)
}

selectmonth(month){
    return cy.get(this.monthDropDown).select(month)
}

selectYear(year){
    return cy.get(this.yearDropDown).select(year)
}

ChecknewsletterCheckBox(){
    return cy.get(this.newsletterCheckBox).check()
}
CheckSpecialOfferCheckbox(){
    return cy.get(this.specialOfferCheckBox).check()
}

fillCompanyName(company_name){
    return cy.get(this.CompanyField).clear().type(company_name)
}

fillCompanyAddress1(adress1){
    return cy.get(this.Adress1Field).clear().type(adress1)
}

fillCompanyAddress2(suit){
    return cy.get(this.Adress2Field).clear().type(suit)
}

fillCompanyCity(city){
    return cy.get(this.CompanyCityField).clear().type(city)
}

selectState(){
    return cy.get(this.stateDropDown).select('2')
}

fillPostCode(zip){
    return cy.get(this.postCodeField).clear().type(zip)
}

checkPreselectedCountry(){
    return cy.get(this.Country)
}

fillAdditionalInfo(message){
    return cy.get(this.additionalInfoField).clear().type(message)
}

fillHomePhone(home_number){
    return cy.get(this.homePhoneNumber).clear().type(home_number)
}

fillMobilePhone(mobile_number){
    return cy.get(this.mobilePhoneNumber).clear().type(mobile_number)
}

fillAliasAddress(){
    return  cy.get(this.aliasAddress)
}

RegisterButton(){
    return cy.get(this.registerBtn)
}

}

export default CreateAnAccount