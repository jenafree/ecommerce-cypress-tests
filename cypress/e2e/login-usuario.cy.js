/// <reference types = "cypress" />
import { faker } from "@faker-js/faker";
import HeaderPage from "../pages/HeaderPage";
import AuthPage from "../pages/AuthPage";

const loginEmail = "oanabarsan@yahoo.com";
const loginPassword = "Suceava321!";
const incorrectEmail = faker.internet.email();
const incorrectPassword = faker.internet.password();

describe("Login do usuário", () => {
  it("Fazer login", () => {
    AuthPage.login(loginEmail, loginPassword);
    cy.get("ul.nav.navbar-nav li:nth-child(10)")
      .contains(` Logged in as `)
      .should("be.visible");
  });

  it("Fazer logout", () => {
    AuthPage.login(loginEmail, loginPassword);
    cy.get("ul.nav.navbar-nav li:nth-child(10)")
      .contains(` Logged in as `)
      .should("be.visible");
    HeaderPage.getLogoutLink().click();
    cy.get("ul.nav.navbar-nav li:nth-child(4) a")
      .contains("Signup / Login")
      .should("be.visible");
  });

  it("Tentar login com email e senha inválidos", () => {
    AuthPage.login(incorrectEmail, incorrectPassword);
    AuthPage.getLoginBtn().click();
    cy.get('form[action="/login"] p')
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });

  it("Tentar login com email inválido e senha válida", () => {
    AuthPage.login(incorrectEmail, loginPassword);
    AuthPage.getLoginBtn().click();
    cy.get('form[action="/login"] p')
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });

  it("Tentar login com email válido e senha inválida", () => {
    AuthPage.login(loginEmail, incorrectPassword);
    AuthPage.getLoginBtn().click();
    cy.get('form[action="/login"] p')
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });

  it("Tentar login preenchendo apenas o email", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getLoginTitle().should("exist");
    AuthPage.getLoginEmail().type(loginEmail, { delay: 0 });
    AuthPage.getLoginBtn().click();
    cy.get("div.login-form input[data-qa='login-password']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
  
  it("Tentar login preenchendo apenas a senha", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getLoginTitle().should("exist");
    AuthPage.getLoginPassword().type(loginPassword, { delay: 0 });
    AuthPage.getLoginBtn().click();
    cy.get("div.login-form input[data-qa='login-email']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Tentar login sem preencher os campos", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getLoginTitle().should("exist");
    AuthPage.getLoginBtn().click();
    cy.get("div.login-form input[data-qa='login-email']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
});
