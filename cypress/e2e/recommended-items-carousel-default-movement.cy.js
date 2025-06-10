/// <reference types = "cypress" />

describe("Default carousel movement functionality in recommended items section test suite", () => {
  it("Default carousel movement test", () => {
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
