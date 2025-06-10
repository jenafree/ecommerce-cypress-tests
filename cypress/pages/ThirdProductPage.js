class ThirdProductPage{
  getProductQuantity(){
    return cy.get('input[id="quantity"]');
  }

  getAddToCartBtn(){
    return cy.get('button.btn.btn-default.cart').contains(' Add to cart ');
  }

  getViewCartBtn(){
    return cy.get('a[href="/view_cart"]').contains('View Cart');
  }

  getCloseBtn(){
    return cy.get('a.cart_quantity_delete');
  }

}

export default new ThirdProductPage();