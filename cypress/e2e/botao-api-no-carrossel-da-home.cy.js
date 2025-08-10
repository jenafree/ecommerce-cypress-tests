/// <reference types = "cypress" />

import TopCarouselHomePage from "../pages/TopCarouselHomePage";

describe("Funcionalidade do botão APIs no carrossel da home", () => {
  it("Botão APIs na primeira imagem do carrossel", () => {
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

  it("Botão APIs na segunda imagem do carrossel", () => {
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

  it("Botão APIs na terceira imagem do carrossel", () => {
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
