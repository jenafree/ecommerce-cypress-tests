/// <reference types = "cypress" />

import TopCarouselHomePage from "../pages/TopCarouselHomePage";

describe("APIs button functionality in carousel home page test suite", () => {
  it("APIs button functionality located in first carousel image test", () => {
    TopCarouselHomePage.getFirstAPIsBtn().click();
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

  it("APIs button functionality located in second carousel image test", () => {
    TopCarouselHomePage.getSecondAPIsBtn().click();
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

  it("APIs button functionality located in third carousel image test", () => {
    TopCarouselHomePage.getThirdAPIsBtn().click();
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

});
