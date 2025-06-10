/// <reference types = "cypress" />

import HomePage from "../pages/HomePage";
import RecommendedItemsPage from "../pages/RecommendedItemsPage";

describe("Add to cart from recommended items test suite", () => {
  it("Add to cart from recommended items test", () => {
    HomePage.getRecommendedItemsSection().scrollIntoView();
    cy.get("div.recommended_items")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("recommended items").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    RecommendedItemsPage.getRecommendedProduct().click();
    RecommendedItemsPage.getViewCartBtn().click();
    cy.get('a[href="/product_details/3"]')
      .contains("Sleeveless Dress")
      .should("exist");
  });
});
