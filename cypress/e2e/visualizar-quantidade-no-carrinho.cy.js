/// <reference types = "cypress" />

import HeaderPage from "../pages/HeaderPage";
import AllProductsPage from "../pages/AllProductsPage";
import ThirdProductPage from "../pages/ThirdProductPage";

const initialQuantity = 1;
const updatedQuantity = 4;

describe("Verificar quantidade do produto na página do carrinho", () => {

  it("Verificar quantidade do produto na página do carrinho", () => {
    HeaderPage.getProductsLink().click();
    cy.get("div.features_items h2.title.text-center")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("All Products").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    cy.get("h4.panel-title a").should(($as) => {
      expect($as).to.have.length(3);
      expect($as[0]).to.have.attr("href", "#Women");
      expect($as[1]).to.have.attr("href", "#Men");
      expect($as[2]).to.have.attr("href", "#Kids");
    });

    cy.get("ul.nav.nav-pills.nav-stacked li").should(($lis) => {
      expect($lis).to.have.length(8);
      expect($lis[0]).to.have.text(" (6)Polo");
      expect($lis[1]).to.have.text(" (5)H&M");
      expect($lis[2]).to.have.text(" (5)Madame");
      expect($lis[3]).to.have.text(" (3)Mast & Harbour");
      expect($lis[4]).to.have.text(" (4)Babyhug");
      expect($lis[5]).to.have.text(" (3)Allen Solly Junior");
      expect($lis[6]).to.have.text(" (3)Kookie Kids");
      expect($lis[7]).to.have.text(" (5)Biba");
    });
    AllProductsPage.getThirdProduct().click();
    cy.get('div.product-information h2').contains('Sleeveless Dress').should('be.visible');
    ThirdProductPage.getProductQuantity().should('have.value', initialQuantity);
    ThirdProductPage.getProductQuantity().clear().type(updatedQuantity, { delay: 0 });
    ThirdProductPage.getProductQuantity().should('have.value', updatedQuantity);
    ThirdProductPage.getAddToCartBtn().click();
    ThirdProductPage.getViewCartBtn().click();
    cy.get('td button.disabled')
      .contains(updatedQuantity);
  });
});
