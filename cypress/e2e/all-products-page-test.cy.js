/// <reference types = "cypress" />

import HeaderPage from "../pages/HeaderPage";
import AllProductsPage from "../pages/AllProductsPage";

describe("Verify All products detail page test suite", () => {

  it("Verify that detail detail is visible: product name, category, price, availability, condition, brand", () => {
    HeaderPage.getProductsLink().click();
    cy.get('div.features_items h2.title.text-center')
  .scrollIntoView()
  .within(() => {
    cy.window().then((win) => {
      cy.contains('All Products').then(($el) => {
        const before = win.getComputedStyle($el[0], '::before')
        const beforeContent = before.getPropertyValue('content')
        expect(beforeContent).to.equal('" "');
      })
    })
  })
    cy.get('h4.panel-title a').should(($as) => {
      expect($as).to.have.length(3)
      expect($as[0]).to.have.attr("href", "#Women")
      expect($as[1]).to.have.attr("href", "#Men")
      expect($as[2]).to.have.attr("href", "#Kids")
    })

    cy.get('ul.nav.nav-pills.nav-stacked li').should(($lis) => {
      expect($lis).to.have.length(8)
      expect($lis[0]).to.have.text(" (6)Polo")
      expect($lis[1]).to.have.text(" (5)H&M")
      expect($lis[2]).to.have.text(" (5)Madame")
      expect($lis[3]).to.have.text(" (3)Mast & Harbour")
      expect($lis[4]).to.have.text(" (4)Babyhug")
      expect($lis[5]).to.have.text(" (3)Allen Solly Junior")
      expect($lis[6]).to.have.text(" (3)Kookie Kids")
      expect($lis[7]).to.have.text(" (5)Biba")
    })
    AllProductsPage.getFirstProduct().click();
    cy.get('div.product-information h2').contains('Blue Top').should('be.visible');
    cy.get('div.product-information p:nth-of-type(1)').contains('Category: Women > Tops').should('be.visible');
    cy.get('div.product-information span:nth-of-type(1) span').contains('Rs. 500').should('be.visible');
    cy.get('div.product-information label').contains('Quantity:').should('be.visible');
    cy.get('div.product-information input[id="quantity"]').should('be.visible').and('have.value', '1');
    cy.get('div.product-information p:nth-of-type(2) ').contains(" In Stock").children('b').should('have.text', "Availability:");
    cy.get('div.product-information p:nth-of-type(3)').contains(" New").children('b').should('have.text', "Condition:");
    cy.get('div.product-information p:nth-of-type(4)').contains(" Polo").children('b').should('have.text', "Brand:");
  });
 
});

