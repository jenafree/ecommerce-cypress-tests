/// <reference types = "cypress" />

import CarouselHomePage from "../pages/CarouselHomePage";

describe("Test Cases button functionality in carousel home page test suite", () => {
  it("Test Cases button functionality located in first carousel image test", () => {
    CarouselHomePage.getFirstTestCaseBtn().click();
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

  it("Test Cases button functionality located in second carousel image test", () => {
    CarouselHomePage.getSecondTestCaseBtn().click();
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
  it("Test Cases button functionality located in third carousel image test", () => {
    CarouselHomePage.getThirdTestCaseBtn().click();
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
});
