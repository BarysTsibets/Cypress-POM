/// <reference types = "cypress"/>

class ContactUs{

contack_Us_Btn = '#contact-link'
contact_Us_title = 'Contact us - My Store'
contact_BreadCrumb_Btn = '.navigation_page'
contact_BreadCrumb_Text = 'Contact'
drop_Down_btn = '#id_contact'
drop_Down_CustomerServise_text = 'Customer service'




click_Contact_Us(){
    return cy.get(this.contack_Us_Btn).click()
}

select_CustomerService_DropDown(){
    return cy.get(this.drop_Down_btn).select(this.drop_Down_CustomerServise_text)
}



}
export default ContactUs