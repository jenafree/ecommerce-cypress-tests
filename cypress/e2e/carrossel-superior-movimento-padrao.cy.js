/// <reference types = "cypress" />

import TopCarouselHomePage from "../pages/TopCarouselHomePage";

describe("Funcionalidade de movimento padrão do carrossel", () => {
  it("Movimento padrão do carrossel", () => {
    cy.clock();
    TopCarouselHomePage.getTopCarousel()
      .find("div.item.active")
      .invoke("index")
      .should("eq", 0);

    cy.tick(3000);

    TopCarouselHomePage.getTopCarousel()
      .find("div.item.active")
      .invoke("index")
      .should("eq", 1);

    cy.tick(3000);

    TopCarouselHomePage.getTopCarousel()
      .find("div.item.active")
      .invoke("index")
      .should("eq", 2);
  });
});
