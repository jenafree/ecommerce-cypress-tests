/// <reference types = "cypress" />

import HeaderPage from "../pages/HeaderPage";
import AllProductsPage from "../pages/AllProductsPage";
import BrandsCategoryPage from "../pages/BrandsCategoryPage";

describe("Verificar categorias por marcas", () => {

  it("Verificar categorias por marcas", () => {
    HeaderPage.getProductsLink().click();
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
    AllProductsPage.getMadameBrandLink().click();
    cy.get("div.features_items h2.title.text-center")
    .scrollIntoView()
    .within(() => {
      cy.window().then((win) => {
        cy.contains("Brand - Madame Products").then(($el) => {
          const before = win.getComputedStyle($el[0], "::before");
          const beforeContent = before.getPropertyValue("content");
          expect(beforeContent).to.equal('" "');
        });
      });
    });
    BrandsCategoryPage.getPoloBrandLink().click();
    cy.get("div.features_items h2.title.text-center")
    .scrollIntoView()
    .within(() => {
      cy.window().then((win) => {
        cy.contains("Brand - Polo Products").then(($el) => {
          const before = win.getComputedStyle($el[0], "::before");
          const beforeContent = before.getPropertyValue("content");
          expect(beforeContent).to.equal('" "');
        });
      });
    });
  });
});
