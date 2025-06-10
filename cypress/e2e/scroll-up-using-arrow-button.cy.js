/// <reference types = "cypress" />

import FooterPage from "../pages/FooterPage";

describe("Scroll up using 'arrow' button test suite", () => {
  it("Scroll up using 'arrow' button test", () => {
    FooterPage.getFooter().scrollIntoView();
    cy.get('div.single-widget h2').contains('Subscription').should('be.visible');
    FooterPage.getUpArrow().click();
    cy.get('div.col-sm-6 h2').contains('Full-Fledged practice website ').should('be.visible');
  });

});
