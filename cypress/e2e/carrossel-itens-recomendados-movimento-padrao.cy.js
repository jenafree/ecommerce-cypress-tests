/// <reference types = "cypress" />

describe("Movimento padrão do carrossel na seção de itens recomendados", () => {
  it("Movimento padrão do carrossel", () => {
    cy.clock();
    cy.get("div[id='recommended-item-carousel'] div.carousel-inner")
      .scrollIntoView()
      .find("div.item.active")
      .invoke("index")
      .should("eq", 0);

    cy.tick(3000);

    cy.get("div[id='recommended-item-carousel'] div.carousel-inner")
      .find("div.item.active")
      .invoke("index")
      .should("eq", 1);
  });
});
