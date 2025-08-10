import HeaderPage from '../pages/PaginaCabecalho';
import AuthPage from '../pages/PaginaAutenticacao';

Cypress.Commands.add('login',(loginEmail, loginPassword) =>{
  HeaderPage.getSignupLink().click();
  AuthPage.getLoginTitle().should('exist');
  AuthPage.getLoginEmail().type(loginEmail, { delay: 0 });
  AuthPage.getLoginPassword().type(loginPassword, { delay: 0 });
  AuthPage.getLoginBtn().click();
});


