/// <reference types = "cypress" />

import HomeCategoryLinksPage from "../pages/HomeCategoryLinksPage";
import AllProductsPage from "../pages/AllProductsPage";

describe("Navegação nas categorias Masculino (home)", () => {
  beforeEach(() => {
    HomeCategoryLinksPage.getMenCategoryLink().click();
  });
  it("Navegar para a categoria T-Shirts", () => {
    HomeCategoryLinksPage.getTShirtsCategory().click();
    cy.get("div.features_items h2.title.text-center")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Men - Tshirts Products").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
  });
  it("Navegar para a categoria Jeans", () => {
    HomeCategoryLinksPage.getJeansCategory().click();
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
