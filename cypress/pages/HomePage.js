class HomePage {

  getRecommendedItemsSection(){
    return cy.get("div.recommended_items");
  }
}
export default new HomePage();
