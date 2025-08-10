import PaginaCabecalho from '../pages/PaginaCabecalho';

describe('Exemplos de Store State', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  afterEach(() => {
    // Limpa o store após cada teste
    cy.limparLocalStorage();
    cy.limparSessionStorage();
  });

  it('Deve salvar e recuperar dados do localStorage', () => {
    // Salva dados no localStorage
    cy.salvarNoLocalStorage('teste', 'valor-teste');
    cy.salvarNoLocalStorage('usuario', 'usuario-teste');

    // Recarrega a página
    cy.reload();

    // Verifica se os dados foram mantidos
    cy.verificarStore('teste', 'valor-teste', 'localStorage');
    cy.verificarStore('usuario', 'usuario-teste', 'localStorage');
  });

  it('Deve salvar e recuperar dados do sessionStorage', () => {
    // Salva dados no sessionStorage
    cy.salvarNoSessionStorage('dados-teste', 'dados-sessao');
    cy.salvarNoSessionStorage('config', 'configuracao');

    // Verifica se os dados foram salvos
    cy.verificarStore('dados-teste', 'dados-sessao', 'sessionStorage');
    cy.verificarStore('config', 'configuracao', 'sessionStorage');
  });

  it('Deve fazer login via Store State', () => {
    // Dados do usuário para store
    const userData = {
      email: 'usuario@teste.com',
      name: 'Usuário Teste',
      token: 'abc123xyz'
    };

    // Login via store (rápido)
    cy.loginViaStore(userData);

    // Verifica se está logado
    cy.verificarLogin();

    // Verifica dados no store
    cy.verificarDadosUsuario(userData);
  });

  it('Deve fazer login inteligente (híbrido)', () => {
    // Primeira execução: login tradicional
    cy.loginInteligente('usuario@teste.com', 'senha123', {
      email: 'usuario@teste.com',
      name: 'Usuário Teste',
      token: 'abc123xyz'
    });

    // Verifica se está logado
    cy.verificarLogin();

    // Segunda execução: deve usar store
    cy.visit('https://automationexercise.com/');
    cy.loginInteligente('usuario@teste.com', 'senha123');

    // Verifica se ainda está logado (usando store)
    cy.verificarLogin();
  });

  it('Deve preparar e usar dados de teste', () => {
    // Prepara dados de teste
    const dadosTeste = {
      produto: 'Blue Top',
      preco: '500',
      categoria: 'Women'
    };

    cy.prepararDadosTeste(dadosTeste);

    // Usa os dados em outro teste
    cy.obterDadosTeste().then((dados) => {
      expect(dados.produto).to.equal('Blue Top');
      expect(dados.preco).to.equal('500');
      expect(dados.categoria).to.equal('Women');
    });
  });

  it('Deve fazer logout via Store State', () => {
    // Primeiro faz login
    const userData = {
      email: 'usuario@teste.com',
      name: 'Usuário Teste',
      token: 'abc123xyz'
    };

    cy.loginViaStore(userData);
    cy.verificarLogin();

    // Faz logout via store
    cy.logoutViaStore();

    // Verifica se está deslogado
    cy.verificarLogout();
  });

  it('Deve gerenciar carrinho via Store State', () => {
    // Dados do carrinho
    const carrinhoData = {
      itens: [
        { id: 1, nome: 'Blue Top', preco: '500', quantidade: 2 },
        { id: 2, nome: 'Men Tshirt', preco: '400', quantidade: 1 }
      ],
      total: '1400'
    };

    // Salva dados do carrinho no store
    cy.salvarNoSessionStorage('carrinho', JSON.stringify(carrinhoData));

    // Verifica dados do carrinho
    cy.obterDoSessionStorage('carrinho').then((carrinho) => {
      const dados = JSON.parse(carrinho);
      expect(dados.itens).to.have.length(2);
      expect(dados.total).to.equal('1400');
    });
  });

  it('Deve persistir preferências do usuário', () => {
    // Preferências do usuário
    const preferencias = {
      tema: 'dark',
      idioma: 'pt-BR',
      notificacoes: true,
      tamanhoFonte: 'medium'
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

  it('Deve limpar store seletivamente', () => {
    // Salva dados em ambos os stores
    cy.salvarNoLocalStorage('dados-persistentes', 'valor1');
    cy.salvarNoSessionStorage('dados-sessao', 'valor2');

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
  });
});
