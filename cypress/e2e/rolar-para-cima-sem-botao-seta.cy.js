/// <reference types = "cypress" />

import FooterPage from '../pages/PaginaRodape';

describe("Rolar para cima sem o botão 'seta'", () => {
  it("Rolar para cima usando o botão 'seta'", () => {
    FooterPage.getFooter().scrollIntoView();
    cy.get('div.single-widget h2').contains('Subscription').should('be.visible');
    FooterPage.getTopCarousel().scrollIntoView();
    cy.get('div.col-sm-6 h2').contains('Full-Fledged practice website ').should('be.visible');
  });

});