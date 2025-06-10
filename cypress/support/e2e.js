Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

beforeEach(() => {
  cy.visit("https://www.automationexercise.com/");
  cy.get('ul.nav.navbar-nav li a[href="/"]').should("exist");
});