/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";
import FooterPage from "../pages/FooterPage";
import HeaderPage from "../pages/HeaderPage";

 const email = faker.internet.email();
 const invalidEmail = "invalidemail@"

describe("Subscribe to newsletter test suite", () => {
  it("Subscribe to newsletter in home page with valid email test", () => {
    FooterPage.getFooter().scrollIntoView();
    FooterPage.getSubscribeField().type(email);
    FooterPage.getSubscribeBtn().click();
    cy.get('div.alert-success.alert').contains('You have been successfully subscribed!').should('be.visible');
  });

  it("Try to subscribe to newsletter in home page using invalid email test", () => {
    FooterPage.getFooter().scrollIntoView();
    FooterPage.getSubscribeField().type(invalidEmail);
    FooterPage.getSubscribeBtn().click();
    cy.get('#susbscribe_email:invalid')
  .invoke('prop', 'validationMessage')
  .should('exist');
  });

  it("Subscribe to newsletter in cart page using valid email test", () => {
    HeaderPage.getCartLink().click();
    FooterPage.getFooter().scrollIntoView();
    FooterPage.getSubscribeField().type(email);
    FooterPage.getSubscribeBtn().click();
    cy.get('div.alert-success.alert').contains('You have been successfully subscribed!').should('be.visible');
  });

  it("Try to subscribe to newsletter in cart page using invalid email test", () => {
    HeaderPage.getCartLink().click();
    FooterPage.getFooter().scrollIntoView();
    FooterPage.getSubscribeField().type(invalidEmail);
    FooterPage.getSubscribeBtn().click();
    cy.get('#susbscribe_email:invalid')
  .invoke('prop', 'validationMessage')
  .should('exist');
  });
});
