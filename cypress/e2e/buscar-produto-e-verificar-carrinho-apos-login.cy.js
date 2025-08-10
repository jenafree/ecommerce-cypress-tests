/// <reference types = "cypress" />

import HeaderPage from "../pages/HeaderPage";
import AllProductsPage from "../pages/AllProductsPage";
import SearchedProductsPage from "../pages/SearchedProductsPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";

const itemPrice = 600;
const loginEmail = "oanabarsan@yahoo.com";
const loginPassword = "Suceava321!";

describe("Search product and verify cart after login test suite", () => {
  it("Search product and verify cart after login test", () => {
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
    SearchedProductsPage.getAddToCartBtn().click();
    SearchedProductsPage.getViewCartLink().click();
    cy.get('a[href="/product_details/5"]')
      .contains("Winter Top")
      .should("exist");
    cy.get('tr[id="product-5"] td.cart_price p')
      .contains(`Rs. ${itemPrice}`)
      .should("be.visible");
    cy.get('tr[id="product-5"] button.disabled')
      .contains("1")
      .should("be.visible");
    cy.get('tr[id="product-5"] td.cart_total p')
      .contains(`Rs. ${itemPrice}`)
      .should("be.visible");
    AuthPage.login(loginEmail, loginPassword);
    cy.get("ul.nav.navbar-nav li:nth-child(10)")
      .contains(` Logged in as `)
      .should("be.visible");
    HeaderPage.getCartLink().click();
    cy.get('a[href="/product_details/5"]')
      .contains("Winter Top")
      .should("exist");
    CartPage.getCloseBtn().click();
    cy.get('span[id="empty_cart"] p.text-center').contains(" Click ").children('b').should('have.text', "Cart is empty!");
  });
});
