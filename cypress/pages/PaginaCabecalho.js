class PaginaCabecalho{
  getHomeLink(){
    return cy.get('ul.nav.navbar-nav li:nth-child(1) a');
  }

  getProductsLink(){
    return cy.get('ul.nav.navbar-nav li:nth-child(2) a');
  }

  getCartLink(){
    return cy.get('ul.nav.navbar-nav li:nth-child(3) a');
  }

  getSignupLink(){
    return cy.get('ul.nav.navbar-nav li:nth-child(4) a');
  }

  getTestCaseLink(){
    return cy.get('ul.nav.navbar-nav li:nth-child(5) a');
  }

  getApiTestLink(){
    return cy.get('ul.nav.navbar-nav li:nth-child(6) a');
  }

  getVideoTutorialLink(){
    return cy.get('ul.nav.navbar-nav li:nth-child(7) a');
  }

  getDeleteAccount(){
    return cy.get("ul.nav.navbar-nav li:nth-child(5) a[href='/delete_account']");
  }

  getLogoutLink(){
    return cy.get('ul.nav.navbar-nav li:nth-child(4) a');
  }

  getContactUsLink(){
    return cy.get('ul.nav.navbar-nav li:nth-child(8) a');
  }

}

export default new PaginaCabecalho();