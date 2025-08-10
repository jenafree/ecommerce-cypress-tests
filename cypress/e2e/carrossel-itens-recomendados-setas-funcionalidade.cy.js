/// <reference types = "cypress" />

import TopCarouselHomePage from "../pages/TopCarouselHomePage";

describe("Funcionalidade das setas no carrossel de itens recomendados", () => {
  it("Teste da seta Anterior do carrossel", () => {
    TopCarouselHomePage.getBottomPrevArrow().scrollIntoView().click();
    cy.get('img[src="get_product_picture/4"]').should("exist");
    cy.get('img[src="get_product_picture/5"]').should("exist");
    cy.get('img[src="get_product_picture/6"]').should("exist");
  });

  it("Teste da seta Próxima do carrossel", () => {
    TopCarouselHomePage.getBottomNextArrow().scrollIntoView().click();
    cy.get('img[src="get_product_picture/4"]').should("exist");
    cy.get('img[src="get_product_picture/5"]').should("exist");
    cy.get('img[src="get_product_picture/6"]').should("exist");
  });

  it("Teste das setas Próxima e Anterior do carrossel", () => {
    TopCarouselHomePage.getBottomNextArrow().scrollIntoView().click();
    cy.get('img[src="get_product_picture/4"]').should("exist");
    cy.get('img[src="get_product_picture/5"]').should("exist");
    cy.get('img[src="get_product_picture/6"]').should("exist");
    TopCarouselHomePage.getBottomPrevArrow().scrollIntoView().click();
    cy.get('img[src="get_product_picture/1"]').should("exist");
    cy.get('img[src="get_product_picture/2"]').should("exist");
    cy.get('img[src="get_product_picture/3"]').should("exist");
    TopCarouselHomePage.getBottomPrevArrow().scrollIntoView().click();
    cy.get('img[src="get_product_picture/4"]').should("exist");
    cy.get('img[src="get_product_picture/5"]').should("exist");
    cy.get('img[src="get_product_picture/6"]').should("exist");
  });

});
