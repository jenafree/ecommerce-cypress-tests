/// <reference types = "cypress" />

import HeaderPage from "../pages/HeaderPage";

describe("Header hyperlinks navigation test suite", () => {
  it("Home page hyperlink test", () => {
    HeaderPage.getHomeLink().click();
    cy.get("div.col-sm-6 h2")
      .contains("Full-Fledged practice website ")
      .should("be.visible");
  });

  it("All products page hyperlink test", () => {
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
  });
  it("Cart page hyperlink test", () => {
    HeaderPage.getCartLink().click();
    cy.get("p.text-center b").contains("Cart is empty!").should("be.visible");
  });

  it("Signup/Login page hyperlink test", () => {
    HeaderPage.getSignupLink().click();
    cy.get("h2").contains("New User Signup!").should("be.visible");
  });

  it("Test Cases page hyperlink test", () => {
    HeaderPage.getTestCaseLink().click();
    cy.get("div.col-sm-9 h2.title.text-center")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Test Cases").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal("none");
          });
        });
      });
    cy.get("div.panel-group h5")
      .contains(
        "Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:"
      )
      .should("exist");
  });

  it("API Testing page hyperlink test", () => {
    HeaderPage.getApiTestLink().click();
    cy.get("div.col-sm-9 h2.title.text-center")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("APIs List ").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal("none");
          });
        });
      });
  });

  it("Video Tutorials page hyperlink test", () => {
    HeaderPage.getVideoTutorialLink().click();
    cy.origin("https://consent.youtube.com", () => {
      cy.visit("https://www.youtube.com/c/AutomationExercise");
      cy.get(
        "div.qqtRac button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.IIdkle span"
      )
        .contains("Acceptă tot")
        .click();
    });
    cy.origin("https://www.youtube.com", () => {
      cy.visit("https://www.youtube.com/c/AutomationExercise");
      cy.get("#text").contains("AutomationExercise").should("be.visible");
    });
  });

  it("Contact us page hyperlink test", () => {
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
  });
});
