/// <reference types = "cypress"/>

class ProductToCart{

printed_Dress = '.right-block > h5 > .product-name'
qty_increase_btn = '.button-plus > span'
drop_down = '#group_1'
pink_color ='#color_24'


dress_Product(){
    return cy.get(this.printed_Dress)
}    
 
increase_Prod_Qty_By_One(){
    return cy.get(this.qty_increase_btn).click()
}

size_Drop_Down_Menu(){
    return cy.get(this.drop_down)
}

change_Product_Color(){
    return cy.get(this.pink_color).click()
}


}

export default ProductToCart