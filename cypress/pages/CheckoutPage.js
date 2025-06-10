class CheckoutPage{
  getMessageField(){
    return cy.get('textarea[name="message"]');
  }

  getPlaceOrderBtn(){
    return cy.get('a[href="/payment"] ');
  }
}

export default new CheckoutPage();