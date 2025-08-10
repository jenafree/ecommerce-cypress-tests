/// <reference types = "cypress" />
import { faker } from "@faker-js/faker";
import HeaderPage from "../pages/HeaderPage";
import ContactUsPage from "../pages/ContactUsPage";

const fullName = faker.person.fullName();
const randomEmail = faker.internet.email();
const randomSubject = faker.lorem.sentence();
const randomParagraph = faker.lorem.paragraph();
const fileName = "463798.jpg";

describe("Formulário Fale Conosco", () => {
  it("Enviar formulário com dados válidos", () => {
    HeaderPage.getContactUsLink().click();
    cy.get("div.col-sm-12 h2")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Contact ").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    ContactUsPage.getNameField().type(fullName, { delay: 0 });
    ContactUsPage.getEmailField().type(randomEmail, { delay: 0 });
    ContactUsPage.getSubjectField().type(randomSubject, { delay: 0 });
    ContactUsPage.getParagraphField().type(randomParagraph, { delay: 0 });
    ContactUsPage.getChooseFileBtn().selectFile("cypress/fixtures/" + fileName);
    ContactUsPage.getSubmitBtn().click();
    cy.get("div.status.alert.alert-success")
      .contains("Success! Your details have been submitted successfully.")
      .should("be.visible");
  });

  it("Ir para a home após enviar o formulário", () => {
    HeaderPage.getContactUsLink().click();
    cy.get("div.col-sm-12 h2")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Contact ").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    ContactUsPage.getNameField().type(fullName, { delay: 0 });
    ContactUsPage.getEmailField().type(randomEmail, { delay: 0 });
    ContactUsPage.getSubjectField().type(randomSubject, { delay: 0 });
    ContactUsPage.getParagraphField().type(randomParagraph, { delay: 0 });
    ContactUsPage.getChooseFileBtn().selectFile("cypress/fixtures/" + fileName);
    ContactUsPage.getSubmitBtn().click();
    cy.get("div.status.alert.alert-success")
      .contains("Success! Your details have been submitted successfully.")
      .should("be.visible");
    ContactUsPage.getHomeBtn().click();
    cy.get('div.col-sm-6 h2').contains('Full-Fledged practice website ').should('be.visible');
  });

  it("Enviar sem preencher o nome", () => {
    HeaderPage.getContactUsLink().click();
    cy.get("div.col-sm-12 h2")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Contact ").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    ContactUsPage.getEmailField().type(randomEmail, { delay: 0 });
    ContactUsPage.getSubjectField().type(randomSubject, { delay: 0 });
    ContactUsPage.getParagraphField().type(randomParagraph, { delay: 0 });
    ContactUsPage.getChooseFileBtn().selectFile("cypress/fixtures/" + fileName);
    ContactUsPage.getSubmitBtn().click();
    cy.get("div.status.alert.alert-success")
      .contains("Success! Your details have been submitted successfully.")
      .should("be.visible");
  });

  it("Enviar sem preencher o assunto", () => {
    HeaderPage.getContactUsLink().click();
    cy.get("div.col-sm-12 h2")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Contact ").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    ContactUsPage.getNameField().type(fullName, { delay: 0 });
    ContactUsPage.getEmailField().type(randomEmail, { delay: 0 });
    ContactUsPage.getParagraphField().type(randomParagraph, { delay: 0 });
    ContactUsPage.getChooseFileBtn().selectFile("cypress/fixtures/" + fileName);
    ContactUsPage.getSubmitBtn().click();
    cy.get("div.status.alert.alert-success")
      .contains("Success! Your details have been submitted successfully.")
      .should("be.visible");
  });

  it("Enviar sem preencher a mensagem", () => {
    HeaderPage.getContactUsLink().click();
    cy.get("div.col-sm-12 h2")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Contact ").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    ContactUsPage.getNameField().type(fullName, { delay: 0 });
    ContactUsPage.getEmailField().type(randomEmail, { delay: 0 });
    ContactUsPage.getSubjectField().type(randomSubject, { delay: 0 });
    ContactUsPage.getChooseFileBtn().selectFile("cypress/fixtures/" + fileName);
    ContactUsPage.getSubmitBtn().click();
    cy.get("div.status.alert.alert-success")
      .contains("Success! Your details have been submitted successfully.")
      .should("be.visible");
  });

  it("Enviar sem anexar arquivo", () => {
    HeaderPage.getContactUsLink().click();
    cy.get("div.col-sm-12 h2")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Contact ").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    ContactUsPage.getNameField().type(fullName, { delay: 0 });
    ContactUsPage.getEmailField().type(randomEmail, { delay: 0 });
    ContactUsPage.getSubjectField().type(randomSubject, { delay: 0 });
    ContactUsPage.getParagraphField().type(randomParagraph, { delay: 0 });
    ContactUsPage.getSubmitBtn().click();
    cy.get("div.status.alert.alert-success")
      .contains("Success! Your details have been submitted successfully.")
      .should("be.visible");
  });

  it("Tentar enviar sem preencher o email", () => {
    HeaderPage.getContactUsLink().click();
    cy.get("div.col-sm-12 h2")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Contact ").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    ContactUsPage.getNameField().type(fullName, { delay: 0 });
    ContactUsPage.getSubjectField().type(randomSubject, { delay: 0 });
    ContactUsPage.getParagraphField().type(randomParagraph, { delay: 0 });
    ContactUsPage.getChooseFileBtn().selectFile("cypress/fixtures/" + fileName);
    ContactUsPage.getSubmitBtn().click();
    cy.get("div[id='form-section'] div.form-group.col-md-6 input[data-qa='email']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Tentar enviar sem preencher nenhum campo", () => {
    HeaderPage.getContactUsLink().click();
    cy.get("div.col-sm-12 h2")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Contact ").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
    ContactUsPage.getSubmitBtn().click();
    cy.get("div[id='form-section'] div.form-group.col-md-6 input[data-qa='email']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
});
