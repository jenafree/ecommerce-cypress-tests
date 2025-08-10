class PaginaFaleConosco{

  getNameField(){
    return cy.get('input[data-qa="name"]');
  }

  getEmailField(){
    return cy.get('input[data-qa="email"]');
  }

  getSubjectField(){
    return cy.get('input[data-qa="subject"]');
  }

  getParagraphField(){
    return cy.get('textarea[data-qa="message"]');
  }

  getChooseFileBtn(){
    return cy.get('input[name="upload_file"]');
  }

  getSubmitBtn(){
    return cy.get('input[data-qa="submit-button"]');
  }

  getHomeBtn(){
    return cy.get('a.btn.btn-success');
  }

}

export default new PaginaFaleConosco();