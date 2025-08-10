/// <reference types = "cypress" />

import HeaderPage from "../pages/HeaderPage";
import AllProductsPage from "../pages/AllProductsPage";
import ThirdProductPage from "../pages/ThirdProductPage";
import CartPage from "../pages/CartPage";

describe("Remover produto do carrinho", () => {

  it("Remover produto do carrinho", () => {
    HeaderPage.getProductsLink().click();
    AllProductsPage.getThirdProduct().click();
    cy.get('div.product-information h2').contains('Sleeveless Dress').should('be.visible');
    ThirdProductPage.getAddToCartBtn().click();
    ThirdProductPage.getViewCartBtn().click();
    ThirdProductPage.getCloseBtn().click();
    cy.get('span[id="empty_cart"] p.text-center').contains(" Click ").children('b').should('have.text', "Cart is empty!");
    CartPage.getHereLink().click({ multiple: true });
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
  });
});
