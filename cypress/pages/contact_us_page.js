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
email_Field = '#email'
order_Number = 'Order #123-456'
message_Field = '#message'
message_Text = 'Hello World'
submit_Btn = '#submitMessage'
success_Message_Text = 'Your message has been successfully sent to our team.'


click_Contact_Us(){
    return cy.get(this.contack_Us_Btn).click()
}

select_CustomerService_DropDown(){
    return cy.get(this.drop_Down_btn).select(this.drop_Down_CustomerServise_text)
}

select_Webmaster_DropDown(){
    return cy.get(this.drop_Down_btn).select(this.drop_Down_Webmaster_text)
}

enter_Email(mail){
    return cy.get('#email').clear().type(mail)
}

enter_Order_Reference(order){
    return cy.get('#id_order').clear().type(order)
}

enter_Message(msg){
    return cy.get(this.message_Field).clear().type(msg)
}
}

export default ContactUs