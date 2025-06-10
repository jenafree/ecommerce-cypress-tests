class FooterPage{
  getFooter(){
    return cy.get("div.footer-widget");
  }
  
  getSubscribeField(){
    return cy.get("#susbscribe_email");
  }

  getSubscribeBtn(){
    return cy.get('#subscribe');
  }

  getUpArrow(){
    return cy.get('#scrollUp');
  }

  getTopCarousel(){
    return cy.get('#slider-carousel');
  }

}

export default new FooterPage();