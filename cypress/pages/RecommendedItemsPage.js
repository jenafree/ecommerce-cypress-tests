class RecommendedItemsPage{
  getRecommendedProduct() {
    return cy.get('div.recommended_items div.productinfo.text-center a[data-product-id="3"]');
   }

   getViewCartBtn(){
    return cy.get('div [id="cartModal"] div.modal-body a[href="/view_cart"]');
  }
}

export default new RecommendedItemsPage();