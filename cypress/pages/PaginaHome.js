class PaginaHome {

  getRecommendedItemsSection(){
    return cy.get('div.recommended_items');
  }
}
export default new PaginaHome();
