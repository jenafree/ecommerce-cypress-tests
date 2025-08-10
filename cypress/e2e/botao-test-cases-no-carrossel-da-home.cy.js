/// <reference types = "cypress" />

import CarouselHomePage from "../pages/CarouselHomePage";

describe("Funcionalidade do botão Test Cases no carrossel da home", () => {
  it("Botão Test Cases na primeira imagem do carrossel", () => {
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

  it("Botão Test Cases na segunda imagem do carrossel", () => {
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
  it("Botão Test Cases na terceira imagem do carrossel", () => {
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
