/// <reference types = "cypress"/>

class ContactUs{

contack_Us_Btn = '#contact-link'
contact_Us_title = 'Contact us - My Store'
contact_BreadCrumb_Btn = '.navigation_page'
contact_BreadCrumb_Text = 'Contact'
drop_Down_btn = '#id_contact'
drop_Down_CustomerServise_text = 'Customer service'
drop_Down_Webmaster_text = 'Webmaster'
customer_Service_ToolTip = 'For any question about a product, an order'
webmaster_Service_ToolTip= 'If a technical problem occurs on this website'

s



click_Contact_Us(){
    return cy.get(this.contack_Us_Btn).click()
}

select_CustomerService_DropDown(){
    return cy.get(this.drop_Down_btn).select(this.drop_Down_CustomerServise_text)
}

select_Webmaster_DropDown(){
    return cy.get(tis.drop_Down_btn).select('Webmaster')
}


}
export default ContactUs