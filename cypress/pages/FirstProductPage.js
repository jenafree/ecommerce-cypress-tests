class FirstProductPage{
  getNameField(){
    return cy.get('input[id="name"]');
  }

  getEmailField(){
    return cy.get('input[id="email"]');
  }

  getReviewField(){
    return cy.get('textarea[name="review"]');
  }

  getSubmitReviewBtn(){
    return cy.get('button[id="button-review"');
  }
}

export default new FirstProductPage();