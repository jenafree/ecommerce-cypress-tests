/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import HeaderPage from '../pages/PaginaCabecalho';
import AuthPage from '../pages/PaginaAutenticacao';

const loginEmail = 'oanabarsan@yahoo.com';
const loginPassword = 'Suceava321!';

describe('Login com Store State - Otimizado', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  afterEach(() => {
    // Limpa o store após cada teste
    cy.limparLocalStorage();
    cy.limparSessionStorage();
  });

  it('Deve fazer login tradicional e salvar no store', () => {
    // Login tradicional
    cy.login(loginEmail, loginPassword);
    
    // Verifica se está logado
    cy.get('ul.nav.navbar-nav li:nth-child(10)')
      .contains(' Logged in as ')
      .should('be.visible');

    // Salva dados no store para próximos testes
    const userData = {
      email: loginEmail,
      name: 'Oana Barsan',
      token: 'user-session-token'
    };

    cy.salvarNoSessionStorage('userData', JSON.stringify(userData));
    cy.salvarNoLocalStorage('authToken', userData.token);

    // Verifica se os dados foram salvos
    cy.verificarStore('authToken', 'user-session-token', 'localStorage');
    cy.verificarDadosUsuario(userData);
  });

  it('Deve fazer login via Store State (rápido)', () => {
    // Dados do usuário pré-configurados
    const userData = {
      email: loginEmail,
      name: 'Oana Barsan',
      token: 'user-session-token'
    };

    // Login via store (muito mais rápido)
    cy.loginViaStore(userData);

    // Verifica se está logado
    cy.verificarLogin();
  });

  it('Deve fazer login inteligente (híbrido)', () => {
    // Primeira execução: login tradicional + salva no store
    cy.loginInteligente(loginEmail, loginPassword, {
      email: loginEmail,
      name: 'Oana Barsan',
      token: 'user-session-token'
    });

    // Verifica se está logado
    cy.verificarLogin();

    // Segunda execução: deve usar store automaticamente
    cy.visit('https://automationexercise.com/');
    cy.loginInteligente(loginEmail, loginPassword);

    // Verifica se ainda está logado (usando store)
    cy.verificarLogin();
  });

  it('Deve fazer logout via Store State', () => {
    // Primeiro faz login via store
    const userData = {
      email: loginEmail,
      name: 'Oana Barsan',
      token: 'user-session-token'
    };

    cy.loginViaStore(userData);
    cy.verificarLogin();

    // Faz logout via store
    cy.logoutViaStore();

    // Verifica se está deslogado
    cy.verificarLogout();
  });

  it('Deve persistir dados do carrinho no store', () => {
    // Faz login
    cy.login(loginEmail, loginPassword);

    // Simula dados do carrinho
    const carrinhoData = {
      itens: [
        { id: 1, nome: 'Blue Top', preco: '500', quantidade: 2 },
        { id: 2, nome: 'Men Tshirt', preco: '400', quantidade: 1 }
      ],
      total: '1400',
      timestamp: new Date().toISOString()
    };

    // Salva dados do carrinho no store
    cy.salvarNoSessionStorage('carrinho', JSON.stringify(carrinhoData));

    // Navega para outra página
    cy.visit('https://automationexercise.com/products');

    // Verifica se os dados do carrinho foram mantidos
    cy.obterDoSessionStorage('carrinho').then((carrinho) => {
      const dados = JSON.parse(carrinho);
      expect(dados.itens).to.have.length(2);
      expect(dados.total).to.equal('1400');
    });
  });

  it('Deve gerenciar preferências do usuário', () => {
    // Faz login
    cy.login(loginEmail, loginPassword);

    // Preferências do usuário
    const preferencias = {
      tema: 'dark',
      idioma: 'pt-BR',
      notificacoes: true,
      tamanhoFonte: 'medium',
      ultimaAtividade: new Date().toISOString()
    };

    // Salva preferências no localStorage (persistente)
    cy.salvarNoLocalStorage('preferencias', JSON.stringify(preferencias));

    // Recarrega a página
    cy.reload();

    // Verifica se as preferências foram mantidas
    cy.obterDoLocalStorage('preferencias').then((prefs) => {
      const dados = JSON.parse(prefs);
      expect(dados.tema).to.equal('dark');
      expect(dados.idioma).to.equal('pt-BR');
      expect(dados.notificacoes).to.be.true;
    });
  });

  it('Deve preparar dados de teste para múltiplos cenários', () => {
    // Dados de teste reutilizáveis
    const dadosTeste = {
      produtos: [
        { nome: 'Blue Top', categoria: 'Women', preco: '500' },
        { nome: 'Men Tshirt', categoria: 'Men', preco: '400' },
        { nome: 'Sleeveless Dress', categoria: 'Women', preco: '1000' }
      ],
      endereco: {
        rua: 'Rua Teste, 123',
        cidade: 'São Paulo',
        cep: '01234-567',
        pais: 'Brasil'
      },
      cartao: {
        numero: '4111111111111111',
        validade: '12/25',
        cvv: '123'
      }
    };

    // Prepara dados para uso em múltiplos testes
    cy.prepararDadosTeste(dadosTeste);

    // Usa os dados em diferentes cenários
    cy.obterDadosTeste().then((dados) => {
      // Cenário 1: Adicionar produtos ao carrinho
      expect(dados.produtos).to.have.length(3);
      expect(dados.produtos[0].nome).to.equal('Blue Top');

      // Cenário 2: Preencher endereço
      expect(dados.endereco.cidade).to.equal('São Paulo');

      // Cenário 3: Dados do cartão
      expect(dados.cartao.numero).to.equal('4111111111111111');
    });
  });

  it('Deve limpar store seletivamente', () => {
    // Salva dados em ambos os stores
    cy.salvarNoLocalStorage('dados-persistentes', 'valor1');
    cy.salvarNoSessionStorage('dados-sessao', 'valor2');
    cy.salvarNoLocalStorage('preferencias', 'dark-mode');
    cy.salvarNoSessionStorage('carrinho', '[]');

    // Verifica se os dados existem
    cy.verificarStore('dados-persistentes', 'valor1', 'localStorage');
    cy.verificarStore('dados-sessao', 'valor2', 'sessionStorage');

    // Limpa apenas localStorage
    cy.limparLocalStorage();

    // Verifica que localStorage foi limpo mas sessionStorage não
    cy.obterDoLocalStorage('dados-persistentes').then((valor) => {
      expect(valor).to.be.null;
    });

    cy.verificarStore('dados-sessao', 'valor2', 'sessionStorage');

    // Limpa sessionStorage também
    cy.limparSessionStorage();

    cy.obterDoSessionStorage('dados-sessao').then((valor) => {
      expect(valor).to.be.null;
    });
  });

  it('Deve demonstrar performance: Login tradicional vs Store State', () => {
    // Mede tempo do login tradicional
    const startTime = Date.now();
    
    cy.login(loginEmail, loginPassword);
    
    const traditionalTime = Date.now() - startTime;
    cy.log(`⏱️ Login tradicional: ${traditionalTime}ms`);

    // Salva dados no store
    const userData = {
      email: loginEmail,
      name: 'Oana Barsan',
      token: 'user-session-token'
    };

    cy.salvarNoSessionStorage('userData', JSON.stringify(userData));
    cy.salvarNoLocalStorage('authToken', userData.token);

    // Faz logout
    cy.logoutViaStore();

    // Mede tempo do login via store
    const startTimeStore = Date.now();
    
    cy.loginViaStore(userData);
    
    const storeTime = Date.now() - startTimeStore;
    cy.log(`⚡ Login via Store: ${storeTime}ms`);

    // Compara performance
    cy.log(`🚀 Melhoria de performance: ${Math.round((traditionalTime - storeTime) / traditionalTime * 100)}%`);
  });
});
