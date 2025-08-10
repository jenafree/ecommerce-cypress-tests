class PaginaPagamento{
  getNameField(){
    return cy.get('input[data-qa="name-on-card"]');
  }

  getCardNumberField(){
    return cy.get('input[data-qa="card-number"]');
  }

  getCardCVC(){
    return cy.get('input[data-qa="cvc"]');
  }

  getExpirationMonth(){
    return cy.get('input[data-qa="expiry-month"]');
  }

  getExpirationYear(){
    return cy.get('input[data-qa="expiry-year"]');
  }

  getConfirmOrderBtn(){
    return cy.get('button[data-qa="pay-button"]');
  }

  getDownloadInvoiceBtn(){
    return cy.get('div.col-sm-9.col-sm-offset-1 a[href="/download_invoice/500"]').contains('Download Invoice');
  }
}

export default new PaginaPagamento();