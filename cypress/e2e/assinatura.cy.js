/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";
import FooterPage from "../pages/FooterPage";
import HeaderPage from "../pages/HeaderPage";

 const email = faker.internet.email();
 const invalidEmail = "invalidemail@"

describe("Assinar newsletter", () => {
  it("Assinar newsletter na página inicial com email válido", () => {
    FooterPage.getFooter().scrollIntoView();
    FooterPage.getSubscribeField().type(email);
    FooterPage.getSubscribeBtn().click();
    cy.get('div.alert-success.alert').contains('You have been successfully subscribed!').should('be.visible');
  });

  it("Tentar assinar newsletter na página inicial com email inválido", () => {
    FooterPage.getFooter().scrollIntoView();
    FooterPage.getSubscribeField().type(invalidEmail);
    FooterPage.getSubscribeBtn().click();
    cy.get('#susbscribe_email:invalid')
  .invoke('prop', 'validationMessage')
  .should('exist');
  });

  it("Assinar newsletter no carrinho com email válido", () => {
    HeaderPage.getCartLink().click();
    FooterPage.getFooter().scrollIntoView();
    FooterPage.getSubscribeField().type(email);
    FooterPage.getSubscribeBtn().click();
    cy.get('div.alert-success.alert').contains('You have been successfully subscribed!').should('be.visible');
  });

  it("Tentar assinar newsletter no carrinho com email inválido", () => {
    HeaderPage.getCartLink().click();
    FooterPage.getFooter().scrollIntoView();
    FooterPage.getSubscribeField().type(invalidEmail);
    FooterPage.getSubscribeBtn().click();
    cy.get('#susbscribe_email:invalid')
  .invoke('prop', 'validationMessage')
  .should('exist');
  });
});
