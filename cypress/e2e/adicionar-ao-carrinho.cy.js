/// <reference types = "cypress" />

import HeaderPage from "../pages/HeaderPage";
import AllProductsPage from "../pages/AllProductsPage";

const priceFirstItem = 500;
const priceSecondItem = 400;

describe("Add to cart test suite", () => {

  it("Add to cart first and second product test", () => {
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
    AllProductsPage.getAddFirstProduct().click();
    AllProductsPage.getContinueShoppingBtn().click();
    AllProductsPage.getAddSecondProduct().click();
    AllProductsPage.getViewCartBtn().click();
    cy.get("tr.cart_menu td").should(($tds) => {
      expect($tds).to.have.length(6);
      expect($tds[0]).to.have.text("Item");
      expect($tds[1]).to.have.text("Description");
      expect($tds[2]).to.have.text("Price");
      expect($tds[3]).to.have.text("Quantity");
      expect($tds[4]).to.have.text("Total");
      expect($tds[5]).to.have.text("");
    });
    cy.get('a[href="/product_details/1"]').contains("Blue Top").should("exist");
    cy.get('a[href="/product_details/2"]')
      .contains("Men Tshirt")
      .should("exist");
    cy.get('tr[id="product-1"] td.cart_price p')
      .contains(`Rs. ${priceFirstItem}`)
      .should("be.visible");
    cy.get('tr[id="product-2"] td.cart_price p')
      .contains(`Rs. ${priceSecondItem}`)
      .should("be.visible");
    cy.get('tr[id="product-1"] button.disabled')
      .contains("1")
      .should("be.visible");
    cy.get('tr[id="product-2"] button.disabled')
      .contains("1")
      .should("be.visible");
    cy.get('tr[id="product-1"] td.cart_total p')
      .contains(`Rs. ${priceFirstItem}`)
      .should("be.visible");
    cy.get('tr[id="product-2"] td.cart_total p')
      .contains(`Rs. ${priceSecondItem}`)
      .should("be.visible");
  });
});
