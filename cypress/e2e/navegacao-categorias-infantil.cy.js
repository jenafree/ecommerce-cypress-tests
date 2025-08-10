/// <reference types = "cypress" />

import HomeCategoryLinksPage from "../pages/HomeCategoryLinksPage";
import AllProductsPage from "../pages/AllProductsPage";

describe("Navigation to Kids categories in home page test suite", () => {
  beforeEach(() => {
    HomeCategoryLinksPage.getKidsCategoryLink().click();
  });
  it("Navigate to Dress category test", () => {
    HomeCategoryLinksPage.getKidsDressCategory().click();
    cy.get("div.features_items h2.title.text-center")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Kids - Dress Products").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
  });
  it("Navigate to Tops & Shirts category test", () => {
    HomeCategoryLinksPage.getTopsShirtsCategory().click();
    cy.get("div.features_items h2.title.text-center")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Kids - Tops & Shirts Products").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
  });

  afterEach(()=>{
    AllProductsPage.getAllProductsLink().click();
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
   })
});
