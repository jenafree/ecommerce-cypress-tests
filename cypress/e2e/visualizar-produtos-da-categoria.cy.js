/// <reference types = "cypress" />

import HomeCategoryLinksPage from "../pages/HomeCategoryLinksPage";
import DressCategoryPage from "../pages/DressCategoryPage";

describe("Verify category products test suite", () => {

  it("Verify category products test", () => {
    cy.get("h4.panel-title a").should(($as) => {
      expect($as).to.have.length(3);
      expect($as[0]).to.have.attr("href", "#Women");
      expect($as[1]).to.have.attr("href", "#Men");
      expect($as[2]).to.have.attr("href", "#Kids");
    });
    HomeCategoryLinksPage.getWomenCategoryLink().click();
    cy.get('div[id="Women"] div.panel-body ul li a').should(($as) => {
      expect($as).to.have.length(3);
      expect($as[0]).to.have.attr("href", "/category_products/1");
      expect($as[1]).to.have.attr("href", "/category_products/2");
      expect($as[2]).to.have.attr("href", "/category_products/7");
    });
    HomeCategoryLinksPage.getDressCategory().click();
    cy.get("div.features_items h2.title.text-center")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Women - Dress Products").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });

    DressCategoryPage.getMenCategoryLink().click();
    DressCategoryPage.getJeansCategoryLink().click();
    cy.get("div.features_items h2.title.text-center")
    .scrollIntoView()
    .within(() => {
      cy.window().then((win) => {
        cy.contains("Men - Jeans Products").then(($el) => {
          const before = win.getComputedStyle($el[0], "::before");
          const beforeContent = before.getPropertyValue("content");
          expect(beforeContent).to.equal('" "');
        });
      });
    });
  });
});
