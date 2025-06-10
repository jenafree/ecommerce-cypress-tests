import HeaderPage from "./HeaderPage";
class AuthPage{
  getSignupTitle(){
    return cy.get('h2').contains('New User Signup!');
  }

  getNameField(){
    return cy.get('input[data-qa="signup-name"]');
  }

  getEmailField(){
    return cy.get('input[data-qa="signup-email"]');
  }

  getSubmitBtn(){
    return cy.get('button[data-qa="signup-button"]');
  }

  getLoginTitle(){
    return cy.get('h2').contains('Login to your account');
  }

  getLoginEmail(){
    return cy.get('input[data-qa="login-email"]');
  }

  getLoginPassword(){
    return cy.get('input[data-qa="login-password"]');
  }

  getLoginBtn(){
    return cy.get('button[data-qa="login-button"]');
  }

  login(loginEmail, loginPassword) {
    HeaderPage.getSignupLink().click();
    this.getLoginTitle().should("exist");
    this.getLoginEmail().type(loginEmail, { delay: 0 });
    this.getLoginPassword().type(loginPassword, { delay: 0 });
    this.getLoginBtn().click();
  }
}

export default new AuthPage();