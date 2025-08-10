/// <reference types = "cypress" />

import TopCarouselHomePage from "../pages/TopCarouselHomePage";

describe("Carousel arrows functionality in recommended items test suite", () => {
  it("Prev arrow carousel test", () => {
    TopCarouselHomePage.getBottomPrevArrow().scrollIntoView().click();
    cy.get('img[src="get_product_picture/4"]').should("exist");
    cy.get('img[src="get_product_picture/5"]').should("exist");
    cy.get('img[src="get_product_picture/6"]').should("exist");
  });

  it("Next arrow carousel test", () => {
    TopCarouselHomePage.getBottomNextArrow().scrollIntoView().click();
    cy.get('img[src="get_product_picture/4"]').should("exist");
    cy.get('img[src="get_product_picture/5"]').should("exist");
    cy.get('img[src="get_product_picture/6"]').should("exist");
  });

  it("Next and Prev arrows carousel test", () => {
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
