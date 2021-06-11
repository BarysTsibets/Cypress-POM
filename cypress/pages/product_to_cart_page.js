/// <reference types = "cypress"/>

class ProductToCart{

printed_Dress = '.right-block > h5 > .product-name'


dress_Product(){
    return cy.get(this.printed_Dress)
}    
 
}

export default ProductToCart