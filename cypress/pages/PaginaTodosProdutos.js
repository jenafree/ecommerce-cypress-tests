class PaginaTodosProdutos{
  getAllProductsLink(){
    return cy.get('ol.breadcrumb li a[href="/products"').contains('Products');
  }

  getFirstProduct(){
    return cy.get('a[href="/product_details/1"]').contains('View Product');
  }

  getThirdProduct(){
    return cy.get('a[href="/product_details/3"]').contains('View Product');
  }

  getAddFirstProduct(){
    return cy.get('div.features_items div.productinfo.text-center:nth-child(1) a[data-product-id="1"]').contains('Add to cart');
  }

  getAddSecondProduct(){
    return cy.get('div.features_items div.productinfo.text-center:nth-child(1) a[data-product-id="2"]').contains('Add to cart');
  }

  getContinueShoppingBtn(){
    return cy.get('div.modal-footer button[data-dismiss="modal"]');
  }

  getViewCartBtn(){
    return cy.get('div.modal-body a[href="/view_cart"]');
  }

  getSearchField(){
    return cy.get('#search_product');
  }

  getSearchBtn(){
    return cy.get('#submit_search');
  }

  getMadameBrandLink(){
    return cy.get("ul.nav.nav-pills.nav-stacked li a[href='/brand_products/Madame']");
  }
}

export default new PaginaTodosProdutos();