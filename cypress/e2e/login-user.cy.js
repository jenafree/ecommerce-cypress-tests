/// <reference types = "cypress" />
import { faker } from "@faker-js/faker";
import HeaderPage from "../pages/HeaderPage";
import AuthPage from "../pages/AuthPage";

const loginEmail = "oanabarsan@yahoo.com";
const loginPassword = "Suceava321!";
const incorrectEmail = faker.internet.email();
const incorrectPassword = faker.internet.password();

describe("Login user test suite", () => {
  it("Log in test", () => {
    AuthPage.login(loginEmail, loginPassword);
    cy.get("ul.nav.navbar-nav li:nth-child(10)")
      .contains(` Logged in as `)
      .should("be.visible");
  });

  it("Log out test", () => {
    AuthPage.login(loginEmail, loginPassword);
    cy.get("ul.nav.navbar-nav li:nth-child(10)")
      .contains(` Logged in as `)
      .should("be.visible");
    HeaderPage.getLogoutLink().click();
    cy.get("ul.nav.navbar-nav li:nth-child(4) a")
      .contains("Signup / Login")
      .should("be.visible");
  });

  it("Try to log in with invalid email and password test", () => {
    AuthPage.login(incorrectEmail, incorrectPassword);
    AuthPage.getLoginBtn().click();
    cy.get('form[action="/login"] p')
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });

  it("Try to log in with invalid email and valid password test", () => {
    AuthPage.login(incorrectEmail, loginPassword);
    AuthPage.getLoginBtn().click();
    cy.get('form[action="/login"] p')
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });

  it("Try to log in with valid email and invalid password test", () => {
    AuthPage.login(loginEmail, incorrectPassword);
    AuthPage.getLoginBtn().click();
    cy.get('form[action="/login"] p')
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });

  it("Try to log in with only email inserted in email field test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getLoginTitle().should("exist");
    AuthPage.getLoginEmail().type(loginEmail, { delay: 0 });
    AuthPage.getLoginBtn().click();
    cy.get("div.login-form input[data-qa='login-password']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
  
  it("Try to log in with only password inserted in password field test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getLoginTitle().should("exist");
    AuthPage.getLoginPassword().type(loginPassword, { delay: 0 });
    AuthPage.getLoginBtn().click();
    cy.get("div.login-form input[data-qa='login-email']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Try to log in with no data inserted in login fields test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getLoginTitle().should("exist");
    AuthPage.getLoginBtn().click();
    cy.get("div.login-form input[data-qa='login-email']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
});
