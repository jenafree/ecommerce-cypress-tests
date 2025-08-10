class PaginaCarrinho{

  getHereLink(){
    return cy.get('a[href="/products"]').children('u').should('have.text', 'here');
  }

  getProceedToCheckoutBtn(){
    return cy.get('div.col-sm-6 a.btn.btn-default.check_out');
  }

  getRegisterLoginLink(){
    return cy.get('a[href="/login"]').children('u').should('have.text', 'Register / Login');
  }

  getCloseBtn(){
    return cy.get('a.cart_quantity_delete');
  }
}

export default new PaginaCarrinho();