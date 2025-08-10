class PaginaFormularioRegistro{
  getRegisterTitle(){
    return cy.get('h2').contains('Enter Account Information');
  }

  getGenderRadioBtn(){
    return cy.get('#id_gender2');
  }

  getNameField(){
    return cy.get("input[data-qa='name']");
  }

  getEmailField(){
    return cy.get("input[data-qa='email']");
  }

  getPasswordField(){
    return cy.get("input[data-qa='password']");
  }

  getBirthDay(){
    return cy.get('select[id="days"]');
  }

  getBirthMonth(){
    return cy.get('select[id="months"]');
  }

  getBirthYear(){
    return cy.get('select[id="years"]');
  }

  getNewsletterCheckbox(){
    return cy.get('input[id="newsletter"]');
  }

  getOffersCheckbox(){
    return cy.get('input[id="optin"]');
  }

  getFirstName(){
    return cy.get('#first_name');
  }
  getLastName(){
    return cy.get('#last_name');
  }

  getCompanyName(){
    return cy.get('#company');
  }

  getStreetAddress(){
    return cy.get('#address1');
  }

  getCountry(){
    return cy.get('select[data-qa="country"]');
  }

  getState(){
    return cy.get('input[data-qa="state"]');
  }

  getCity(){
    return cy.get('input[data-qa="city"]');
  }

  getZipCode(){
    return cy.get('input[data-qa="zipcode"]');
  }

  getPhoneNumber(){
    return cy.get('input[data-qa="mobile_number"]');
  }

  getCreateAccountBtn(){
    return cy.get('button[data-qa="create-account"]');
  }

  getContinueBtn(){
    return cy.get('a[data-qa="continue-button"]');
  }
}

export default new PaginaFormularioRegistro();