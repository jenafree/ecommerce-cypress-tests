import HeaderPage from '../pages/PaginaCabecalho';
import AuthPage from '../pages/PaginaAutenticacao';

// Comando de login tradicional (atual)
Cypress.Commands.add('login', (loginEmail, loginPassword) => {
  HeaderPage.getSignupLink().click();
  AuthPage.getLoginTitle().should('exist');
  AuthPage.getLoginEmail().type(loginEmail, { delay: 0 });
  AuthPage.getLoginPassword().type(loginPassword, { delay: 0 });
  AuthPage.getLoginBtn().click();
});

// Comandos para Store State (localStorage/sessionStorage)

// Salvar dados no localStorage
Cypress.Commands.add('salvarNoLocalStorage', (key, value) => {
  cy.window().then((win) => {
    win.localStorage.setItem(key, value);
  });
});

// Salvar dados no sessionStorage
Cypress.Commands.add('salvarNoSessionStorage', (key, value) => {
  cy.window().then((win) => {
    win.sessionStorage.setItem(key, value);
  });
});

// Obter dados do localStorage
Cypress.Commands.add('obterDoLocalStorage', (key) => {
  return cy.window().then((win) => {
    return win.localStorage.getItem(key);
  });
});

// Obter dados do sessionStorage
Cypress.Commands.add('obterDoSessionStorage', (key) => {
  return cy.window().then((win) => {
    return win.sessionStorage.getItem(key);
  });
});

// Limpar localStorage
Cypress.Commands.add('limparLocalStorage', () => {
  cy.window().then((win) => {
    win.localStorage.clear();
  });
});

// Limpar sessionStorage
Cypress.Commands.add('limparSessionStorage', () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

// Login via Store State (rápido)
Cypress.Commands.add('loginViaStore', (userData) => {
  // Salva dados do usuário no sessionStorage
  cy.salvarNoSessionStorage('userData', JSON.stringify(userData));
  
  // Salva token de autenticação no localStorage
  if (userData.token) {
    cy.salvarNoLocalStorage('authToken', userData.token);
  }
  
  // Recarrega a página para aplicar os dados
  cy.reload();
  
  // Verifica se o login foi aplicado
  cy.get('[data-testid="user-menu"], .logged-in, .user-menu').should('be.visible');
});

// Login híbrido (inteligente)
Cypress.Commands.add('loginInteligente', (email, senha, userData = null) => {
  // Primeiro tenta verificar se já está logado via store
  cy.window().then((win) => {
    const token = win.localStorage.getItem('authToken');
    const sessionData = win.sessionStorage.getItem('userData');
    
    if (token && sessionData) {
      // Se tem dados no store, usa eles
      cy.log('🔐 Login via Store State detectado');
      cy.reload();
      cy.get('[data-testid="user-menu"], .logged-in, .user-menu').should('be.visible');
    } else {
      // Se não tem dados, faz login tradicional
      cy.log('🔑 Fazendo login tradicional');
      cy.login(email, senha);
      
      // Se foi fornecido userData, salva no store para próximos testes
      if (userData) {
        cy.salvarNoSessionStorage('userData', JSON.stringify(userData));
        if (userData.token) {
          cy.salvarNoLocalStorage('authToken', userData.token);
        }
      }
    }
  });
});

// Verificar dados no store
Cypress.Commands.add('verificarStore', (key, expectedValue, storageType = 'localStorage') => {
  if (storageType === 'localStorage') {
    cy.obterDoLocalStorage(key).then((value) => {
      expect(value).to.equal(expectedValue);
    });
  } else {
    cy.obterDoSessionStorage(key).then((value) => {
      expect(value).to.equal(expectedValue);
    });
  }
});

// Verificar dados do usuário no store
Cypress.Commands.add('verificarDadosUsuario', (expectedUserData) => {
  cy.obterDoSessionStorage('userData').then((userData) => {
    if (userData) {
      const user = JSON.parse(userData);
      expect(user.email).to.equal(expectedUserData.email);
      if (expectedUserData.name) {
        expect(user.name).to.equal(expectedUserData.name);
      }
    } else {
      throw new Error('Dados do usuário não encontrados no sessionStorage');
    }
  });
});

// Logout via Store State
Cypress.Commands.add('logoutViaStore', () => {
  cy.limparLocalStorage();
  cy.limparSessionStorage();
  cy.reload();
});

// Comando para preparar dados de teste
Cypress.Commands.add('prepararDadosTeste', (dados) => {
  // Salva dados de teste no store
  cy.salvarNoSessionStorage('testData', JSON.stringify(dados));
  
  // Log dos dados preparados
  cy.log(`📝 Dados de teste preparados: ${JSON.stringify(dados)}`);
});

// Comando para obter dados de teste
Cypress.Commands.add('obterDadosTeste', () => {
  return cy.obterDoSessionStorage('testData').then((data) => {
    return data ? JSON.parse(data) : null;
  });
});

// Comando para verificar se está logado
Cypress.Commands.add('verificarLogin', () => {
  cy.get('[data-testid="user-menu"], .logged-in, .user-menu, .user-info').should('be.visible');
});

// Comando para verificar se não está logado
Cypress.Commands.add('verificarLogout', () => {
  cy.get('[data-testid="login-link"], .login-link, .signup-login').should('be.visible');
});


