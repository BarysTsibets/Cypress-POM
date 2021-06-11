/// <reference types = "cypress"/>

class ProductToCart{

printed_Dress = '.right-block > h5 > .product-name'
qty_increase_btn = '.button-plus > span'
drop_down_size = '#group_1'
pink_color_btn ='#color_24'
pink_Dress_icon = '#thumb_11'
add_to_cart_btn = '.exclusive > span'
process_to_checkout_btn = '.button-medium > span'


dress_Product(){
    return cy.get(this.printed_Dress)
}    
 
increase_Prod_Qty_By_One(){
    return cy.get(this.qty_increase_btn).click()
}

size_Drop_Down_Menu(){
    return cy.get(this.drop_down_size)
}

change_Product_Color(){
    return cy.get(this.pink_color_btn).click()
}

pink_Dress_Img(){
    return cy.get(this.pink_Dress_icon)
}

click_Add_to_Cart_Btn(){
    return cy.get(this.add_to_cart_btn).click()
}

click_process_to_Checkout_Btn(){
    return cy.get(this.process_to_checkout_btn).click()
}

}

export default ProductToCart