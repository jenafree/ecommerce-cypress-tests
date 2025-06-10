/// <reference types = "cypress" />
import { faker } from "@faker-js/faker";
import HeaderPage from "../pages/HeaderPage";
import ContactUsPage from "../pages/ContactUsPage";

const fullName = faker.person.fullName();
const randomEmail = faker.internet.email();
const randomSubject = faker.lorem.sentence();
const randomParagraph = faker.lorem.paragraph();
const fileName = "463798.jpg";

describe("Contact us form test suite", () => {
  it("Contact us form test", () => {
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

  it("Go to home page after submitting contact us form test", () => {
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

  it("Submit form with no name inserted in name field test", () => {
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

  it("Submit form with no subject inserted in subject field test", () => {
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

  it("Submit form with no message inserted in message field test", () => {
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

  it("Submit form with no file attached test", () => {
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

  it("Try to submit form with no email inserted in email field test", () => {
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

  it("Try to submit form with no data inserted test", () => {
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
