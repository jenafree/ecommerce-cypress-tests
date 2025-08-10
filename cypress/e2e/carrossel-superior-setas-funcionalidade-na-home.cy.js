/// <reference types = "cypress" />

import TopCarouselHomePage from "../pages/TopCarouselHomePage";

describe("Funcionalidade das setas do carrossel superior", () => {
  it("Teste da seta Anterior do carrossel", () => {
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl1.jpg"]').should("exist");
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl3.jpg"]').should("exist");
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl2.jpg"]').should("exist");
  });

  it("Teste da seta Próxima do carrossel", () => {
    TopCarouselHomePage.getNextArrow().click();
    cy.get('img[src="/static/images/home/girl3.jpg"]').should("exist");
    TopCarouselHomePage.getNextArrow().click();
    cy.get('img[src="/static/images/home/girl1.jpg"]').should("exist");
    TopCarouselHomePage.getNextArrow().click();
    cy.get('img[src="/static/images/home/girl2.jpg"]').should("exist");
  });

  it("Teste das setas Próxima e Anterior do carrossel", () => {
    TopCarouselHomePage.getNextArrow().click();
    cy.get('img[src="/static/images/home/girl1.jpg"]').should("exist");
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl2.jpg"]').should("exist");
    TopCarouselHomePage.getNextArrow().click();
    cy.get('img[src="/static/images/home/girl1.jpg"]').should("exist");
    TopCarouselHomePage.getPrevArrow().click();
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl3.jpg"]').should("exist");
  });
});
