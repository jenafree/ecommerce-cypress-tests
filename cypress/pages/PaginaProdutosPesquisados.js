class PaginaProdutosPesquisados{
  getAddToCartBtn(){
    return cy.get('div.productinfo.text-center a[data-product-id="5"]').contains('Add to cart');
  }

  getViewCartLink(){
    return cy.get('p.text-center a[href="/view_cart"]');
  }
}

export default new PaginaProdutosPesquisados();