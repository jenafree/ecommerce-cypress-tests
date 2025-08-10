/// <reference types = "cypress" />

import HeaderPage from "../pages/HeaderPage";
import AllProductsPage from "../pages/AllProductsPage";

describe("Search product test suite", () => {
  it("Search product by an existing product keyword", () => {
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
    AllProductsPage.getSearchField().type("Winter Top");
    AllProductsPage.getSearchBtn().click();
    cy.get("div.features_items h2.title.text-center")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Searched Products").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    cy.get("div.productinfo.text-center p	")
      .contains("Winter Top")
      .should("exist");
  });
});
