/// <reference types = "cypress" />

import HeaderPage from "../pages/HeaderPage";
import AllProductsPage from "../pages/AllProductsPage";
import FirstProductPage from "../pages/FirstProductPage";
import { faker } from "@faker-js/faker";

const fullName = faker.person.fullName();
const randomEmail = faker.internet.email();
const randomReview = faker.lorem.sentences();

describe("Add review to product test suite", () => {

  it("Suite de testes: adicionar avaliação de produto", () => {
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
    AllProductsPage.getFirstProduct().click();
    cy.get('div.product-information h2').contains('Blue Top').should('be.visible');
    FirstProductPage.getNameField().type(fullName, { delay :0 });
    FirstProductPage.getEmailField().type(randomEmail, { delay :0 });
    FirstProductPage.getReviewField().type(randomReview, { delay :0 });
    FirstProductPage.getSubmitReviewBtn().click();
    cy.get('div.alert-success.alert span').contains("Thank you for your review.").should('be.visible');
  });
});
