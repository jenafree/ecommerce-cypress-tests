# 🚀 E2E com Cypress no AutomationExercise

Automação de fluxos críticos do e‑commerce (cadastro, login, busca, carrinho, checkout, avaliações e mais) usando **Cypress 12** e **Page Object Model**. O projeto foi traduzido para **pt‑BR** e agora possui **qualidade automatizada** com **ESLint + Husky (pre-commit)** e remoção automática de comentários no commit.

> 🚧 **Projeto em Desenvolvimento Ativo** - Novas funcionalidades sendo adicionadas constantemente!

## 🎯 Sobre o Sistema Testado

### 🌐 **AutomationExercise** - Sistema Público e Gratuito

O **AutomationExercise** é uma plataforma de e-commerce **100% gratuita e pública** criada especificamente para praticar automação de testes. É perfeita para:

- ✅ **Aprender automação** sem custos
- ✅ **Praticar Cypress** em cenários reais
- ✅ **Desenvolver Page Objects** e DSL
- ✅ **Testar fluxos completos** de e-commerce
- ✅ **Contribuir** para a comunidade de QA

### 🔗 **Acesso ao Sistema**
- **URL**: https://automationexercise.com/
- **Status**: ✅ **Online e Funcionando**
- **Custo**: 🆓 **Totalmente Gratuito**
- **Registro**: ✅ **Não é necessário**
- **Limitações**: ❌ **Nenhuma**

### 🛍️ **Funcionalidades Disponíveis**
- ✅ **Cadastro e Login** de usuários
- ✅ **Busca de produtos** por categoria
- ✅ **Carrinho de compras** completo
- ✅ **Checkout** com dados pessoais
- ✅ **Avaliações** de produtos
- ✅ **Upload de arquivos** no contato
- ✅ **Carrosséis** e navegação
- ✅ **Responsividade** mobile/desktop

### 🎯 **Por que escolhemos este sistema?**
- 🆓 **Gratuito**: Sem custos ou limitações
- 🌍 **Público**: Acesso imediato para todos
- 🔄 **Estável**: Sistema bem mantido
- 📱 **Completo**: Fluxos reais de e-commerce
- 🎨 **Interface moderna**: Design atual
- 🚀 **Performance**: Carregamento rápido

## 📋 O que tem aqui

- ✅ **Testes E2E organizados** em `cypress/e2e`
- ✅ **Page Objects** em `cypress/pages` (nomes em pt‑BR)
- ✅ **Comando customizado** `cy.login` em `cypress/support/commands.js`
- ✅ **ESLint** com regras recomendadas + rule set para Cypress
- ✅ **Husky + lint-staged**: padronização automática no pre-commit
- ✅ **Remoção automática** de comentários nos arquivos staged
- 🚧 **DSL (Domain Specific Language)** para testes mais legíveis

## 🛠️ Requisitos

- **Node.js** >= 18 (recomendado) / >= 16 (mínimo)
- **npm** (ou yarn/pnpm)
- **Navegadores**: Chrome e Firefox

## 🚀 Instalação

### 1) Clone o repositório
```bash
git clone https://github.com/jenafree/ecommerce-cypress-tests.git
cd ecommerce-cypress-tests
```

### 2) Instale dependências
```bash
npm install
```

### 3) (Opcional) Instale o Cypress na primeira vez
```bash
npx cypress install
```

## 🎯 Como rodar os testes

### Interativo (Test Runner)
```bash
npm run cy:open
```

### Headless (Chrome)
```bash
npm run cy:chrome:headless
```

### Apenas um spec (ex.: login)
```bash
npm run cy:chrome:headless -- --spec cypress/e2e/login-usuario.cy.js
```

## 🔧 Qualidade e Git Hooks

### Lint manual
```bash
npm run lint
```

### Lint com correções automáticas
```bash
npm run lint:fix
```

## 🎨 DSL - Domain Specific Language

### O que é DSL?

**DSL (Domain Specific Language)** é uma linguagem especializada para um domínio específico. No nosso projeto de testes, criamos uma DSL em português que torna os testes mais legíveis e próximos da linguagem natural.

### Como funciona nossa DSL?

#### Antes (Cypress puro):
```javascript
cy.get('[data-testid="login-email"]').type('usuario@teste.com');
cy.get('[data-testid="login-password"]').type('senha123');
cy.get('[data-testid="login-button"]').click();
cy.get('[data-testid="welcome-message"]').should('contain', 'Bem-vindo');
```

#### Depois (Nossa DSL):
```javascript
// Comando customizado cy.login
cy.login('usuario@teste.com', 'senha123');

// Page Objects em português
PaginaAutenticacao.getLoginEmail().type(email);
PaginaAutenticacao.getLoginPassword().type(senha);
PaginaAutenticacao.getLoginBtn().click();
```

### 🎯 Benefícios da DSL

- ✅ **Legibilidade**: Testes mais fáceis de entender
- ✅ **Manutenibilidade**: Mudanças centralizadas nos Page Objects
- ✅ **Reutilização**: Comandos customizados para ações comuns
- ✅ **Tradução**: Nomes em português para melhor compreensão
- ✅ **Consistência**: Padrões uniformes em todo o projeto

### 📝 Exemplos de DSL no Projeto

#### Comandos Customizados:
```javascript
// cypress/support/commands.js
cy.login(email, senha);           // Login automático
cy.adicionarAoCarrinho();         // Adicionar produto ao carrinho
cy.verificarCarrinho();           // Verificar itens no carrinho
```

#### Page Objects em Português:
```javascript
// cypress/pages/PaginaAutenticacao.js
PaginaAutenticacao.getLoginEmail()     // Campo de email
PaginaAutenticacao.getLoginPassword()  // Campo de senha
PaginaAutenticacao.getLoginBtn()       // Botão de login

// cypress/pages/PaginaCarrinho.js
PaginaCarrinho.getViewCartLink()       // Link "Ver carrinho"
PaginaCarrinho.getCheckoutBtn()        // Botão "Finalizar compra"
```

#### Testes com DSL:
```javascript
describe('Login do usuário', () => {
  it('Deve fazer login com sucesso', () => {
    // DSL torna o teste mais legível
    cy.visit('/login');
    cy.login('usuario@teste.com', 'senha123');
    cy.verificarLoginSucesso();
  });
});
```

## 💾 Persistência de Sessão e Storage

### 🔐 **Cypress Login Session vs LocalStorage**

No nosso projeto, utilizamos diferentes estratégias para gerenciar a autenticação e persistência de dados:

#### **1. Cypress Login Session (Recomendado)**
```javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (loginEmail, loginPassword) => {
  HeaderPage.getSignupLink().click();
  AuthPage.getLoginTitle().should('exist');
  AuthPage.getLoginEmail().type(loginEmail, { delay: 0 });
  AuthPage.getLoginPassword().type(loginPassword, { delay: 0 });
  AuthPage.getLoginBtn().click();
});

// Uso nos testes
cy.login('usuario@teste.com', 'senha123');
```

**✅ Vantagens:**
- **Mais realista**: Simula o fluxo real de login
- **Testa a UI**: Valida formulários e validações
- **Cobertura completa**: Testa todo o processo de autenticação
- **Debugging fácil**: Visualiza cada passo no Cypress

#### **2. LocalStorage/SessionStorage (Implementado)**
```javascript
// Comandos para Store State implementados
cy.salvarNoLocalStorage('authToken', 'abc123xyz');
cy.salvarNoSessionStorage('userData', JSON.stringify(userData));
cy.obterDoLocalStorage('authToken');
cy.obterDoSessionStorage('userData');
cy.limparLocalStorage();
cy.limparSessionStorage();
```

**🚀 Comandos Disponíveis:**
- `cy.salvarNoLocalStorage(key, value)` - Salva no localStorage
- `cy.salvarNoSessionStorage(key, value)` - Salva no sessionStorage
- `cy.obterDoLocalStorage(key)` - Obtém do localStorage
- `cy.obterDoSessionStorage(key)` - Obtém do sessionStorage
- `cy.limparLocalStorage()` - Limpa localStorage
- `cy.limparSessionStorage()` - Limpa sessionStorage

### 🎯 **Estratégia Atual do Projeto**

#### **Login Session (Padrão)**
```javascript
// cypress/e2e/login-usuario.cy.js
describe('Login do usuário', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('/');
    cy.login('usuario@teste.com', 'senha123');
    
    // Verifica se o login funcionou
    cy.get('[data-testid="welcome-message"]')
      .should('contain', 'Bem-vindo');
  });
});
```

#### **Login via Store State (Otimizado)**
```javascript
// cypress/e2e/login-com-store-state.cy.js
describe('Login com Store State', () => {
  it('Deve fazer login via Store State (rápido)', () => {
    const userData = {
      email: 'usuario@teste.com',
      name: 'Usuário Teste',
      token: 'abc123xyz'
    };

    // Login via store (muito mais rápido)
    cy.loginViaStore(userData);
    cy.verificarLogin();
  });
});
```

### 🔄 **Fluxo Completo de Autenticação**

#### **1. Login Tradicional (Atual)**
```javascript
// 1. Navega para a página
cy.visit('/');

// 2. Clica no link de login
cy.get('[data-testid="login-link"]').click();

// 3. Preenche credenciais
cy.get('[data-testid="email"]').type('usuario@teste.com');
cy.get('[data-testid="password"]').type('senha123');

// 4. Submete o formulário
cy.get('[data-testid="login-button"]').click();

// 5. Verifica sucesso
cy.get('[data-testid="welcome"]').should('be.visible');
```

#### **2. Login via Store State (Implementado)**
```javascript
// 1. Define dados de autenticação
const userData = {
  email: 'usuario@teste.com',
  name: 'Usuário Teste',
  token: 'abc123xyz'
};

// 2. Login via store (instantâneo)
cy.loginViaStore(userData);

// 3. Verifica se está logado
cy.verificarLogin();
```

#### **3. Login Inteligente (Híbrido)**
```javascript
// Comando que escolhe automaticamente a melhor estratégia
cy.loginInteligente('usuario@teste.com', 'senha123', userData);

// Primeira execução: login tradicional + salva no store
// Próximas execuções: usa store automaticamente
```

### 📊 **Comparação das Abordagens**

| Aspecto | Login Session | LocalStorage |
|---------|---------------|--------------|
| **Realismo** | ✅ Muito alto | ⚠️ Baixo |
| **Velocidade** | ⚠️ Mais lento | ✅ Muito rápido |
| **Cobertura** | ✅ Completa | ❌ Limitada |
| **Manutenção** | ⚠️ Mais trabalho | ✅ Menos trabalho |
| **Debugging** | ✅ Fácil | ❌ Difícil |
| **Validações** | ✅ Testa tudo | ❌ Pula validações |

### 🚀 **Comandos Store State Implementados**

#### **Gerenciamento Básico:**
```javascript
// Salvar dados
cy.salvarNoLocalStorage('chave', 'valor');
cy.salvarNoSessionStorage('chave', 'valor');

// Obter dados
cy.obterDoLocalStorage('chave');
cy.obterDoSessionStorage('chave');

// Limpar dados
cy.limparLocalStorage();
cy.limparSessionStorage();
```

#### **Autenticação Otimizada:**
```javascript
// Login via store (rápido)
cy.loginViaStore(userData);

// Login inteligente (híbrido)
cy.loginInteligente(email, senha, userData);

// Logout via store
cy.logoutViaStore();

// Verificações
cy.verificarLogin();
cy.verificarLogout();
```

#### **Verificações e Validações:**
```javascript
// Verificar dados no store
cy.verificarStore('chave', 'valor', 'localStorage');
cy.verificarStore('chave', 'valor', 'sessionStorage');

// Verificar dados do usuário
cy.verificarDadosUsuario(expectedUserData);
```

#### **Dados de Teste:**
```javascript
// Preparar dados reutilizáveis
cy.prepararDadosTeste(dados);

// Obter dados de teste
cy.obterDadosTeste();
```

### 🎯 **Exemplos Práticos Implementados**

#### **Teste de Performance:**
```javascript
// cypress/e2e/login-com-store-state.cy.js
it('Deve demonstrar performance: Login tradicional vs Store State', () => {
  // Mede tempo do login tradicional
  const startTime = Date.now();
  cy.login(email, senha);
  const traditionalTime = Date.now() - startTime;
  
  // Mede tempo do login via store
  const startTimeStore = Date.now();
  cy.loginViaStore(userData);
  const storeTime = Date.now() - startTimeStore;
  
  // Compara performance
  cy.log(`🚀 Melhoria: ${Math.round((traditionalTime - storeTime) / traditionalTime * 100)}%`);
});
```

#### **Gerenciamento de Carrinho:**
```javascript
// Salva dados do carrinho no store
const carrinhoData = {
  itens: [
    { id: 1, nome: 'Blue Top', preco: '500', quantidade: 2 },
    { id: 2, nome: 'Men Tshirt', preco: '400', quantidade: 1 }
  ],
  total: '1400'
};

cy.salvarNoSessionStorage('carrinho', JSON.stringify(carrinhoData));

// Verifica dados do carrinho
cy.obterDoSessionStorage('carrinho').then((carrinho) => {
  const dados = JSON.parse(carrinho);
  expect(dados.itens).to.have.length(2);
  expect(dados.total).to.equal('1400');
});
```

#### **Preferências do Usuário:**
```javascript
// Salva preferências no localStorage (persistente)
const preferencias = {
  tema: 'dark',
  idioma: 'pt-BR',
  notificacoes: true
};

cy.salvarNoLocalStorage('preferencias', JSON.stringify(preferencias));

// Recarrega e verifica se foram mantidas
cy.reload();
cy.obterDoLocalStorage('preferencias').then((prefs) => {
  const dados = JSON.parse(prefs);
  expect(dados.tema).to.equal('dark');
});
```

### 🚀 **Recomendação para o Projeto**

#### **Para Testes E2E (Atual):**
- ✅ **Mantenha o login session** para testes de autenticação
- ✅ **Use store state** para testes de performance
- ✅ **Implemente login inteligente** para otimização
- ✅ **Teste fluxos completos** de autenticação

#### **Para Otimizações Futuras:**
```javascript
// Comando híbrido já implementado
Cypress.Commands.add('loginInteligente', (email, senha, userData = null) => {
  // Tenta login via storage primeiro
  cy.window().then((win) => {
    const token = win.localStorage.getItem('authToken');
    const sessionData = win.sessionStorage.getItem('userData');
    
    if (token && sessionData) {
      // Se tem dados no store, usa eles
      cy.log('🔐 Login via Store State detectado');
      cy.reload();
      cy.get('[data-testid="user-menu"], .logged-in, .user-menu').should('be.visible');
    } else {
      // Se não tem dados, faz login normal
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
```

### 🎯 **Próximos Passos**

- ✅ **Implementar login via storage** para testes de performance
- ✅ **Criar comandos híbridos** que escolhem a melhor estratégia
- ✅ **Adicionar validações** de dados no storage
- ✅ **Documentar padrões** de autenticação
- 🚧 **Expandir para outros cenários** (carrinho, checkout, etc.)
- 🚧 **Implementar cache inteligente** para dados frequentes

## 🐕 Husky - Git Hooks Automatizados

### O que é o Husky?

O **Husky** é uma ferramenta que permite executar scripts automaticamente em diferentes momentos do Git (pre-commit, pre-push, etc.). No nosso projeto, ele garante que:

- ✅ **Código seja formatado** antes de cada commit
- ✅ **ESLint seja executado** automaticamente
- ✅ **Comentários sejam removidos** dos arquivos
- ✅ **Qualidade seja mantida** sem esforço manual

### Como funciona no nosso projeto?

#### 1. **Pre-commit Hook**
Antes de cada commit, o Husky executa automaticamente:

```bash
# .husky/pre-commit
npx lint-staged
```

#### 2. **Lint-staged**
O lint-staged executa apenas nos arquivos que foram modificados:

```json
// package.json
"lint-staged": {
  "*.{js,ts,jsx,tsx}": [
    "eslint --fix"
  ]
}
```

### 📝 Exemplo Prático de Uso

#### Cenário: Fazendo um commit

```bash
# 1. Você modifica um arquivo de teste
# cypress/e2e/login-usuario.cy.js

# 2. Adiciona as mudanças
git add cypress/e2e/login-usuario.cy.js

# 3. Tenta fazer o commit
git commit -m "feat: adiciona novo teste de login"
```

#### O que acontece automaticamente:

```bash
🐕 Husky > pre-commit (node v20.11.1)
  ✔ Preparing...
  ✔ Running tasks...
  ✔ Cleaning up...

🔧 lint-staged > Running tasks for *.{js,ts,jsx,tsx}
  ✔ eslint --fix [1 file]

✅ Commit realizado com sucesso!
```

#### Log do processo:

```bash
# Log detalhado do que aconteceu:
[INFO] Husky: Executando pre-commit hook...
[INFO] lint-staged: Processando 1 arquivo modificado
[INFO] ESLint: Corrigindo formatação automaticamente
[INFO] ESLint: Removendo comentários desnecessários
[INFO] ✅ Commit aprovado e realizado!
```

### 🚫 O que acontece se houver erros?

Se o ESLint encontrar erros que não podem ser corrigidos automaticamente:

```bash
🐕 Husky > pre-commit (node v20.11.1)
  ✔ Preparing...
  ❌ Running tasks...
  ❌ Cleaning up...

🔧 lint-staged > Running tasks for *.{js,ts,jsx,tsx}
  ❌ eslint --fix [1 file]

❌ Commit falhou! Corrija os erros e tente novamente.

# Erros encontrados:
# - Linha 15: 'variable' is defined but never used
# - Linha 23: Missing semicolon
```

### 🔧 Configuração do Husky

#### Instalação (já feita no projeto):
```bash
npm install husky --save-dev
npx husky install
```

#### Adicionar hook (já configurado):
```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

#### Configuração do lint-staged (já configurado):
```json
// package.json
{
  "lint-staged": {
    "*.{js,ts,jsx,tsx}": [
      "eslint --fix"
    ]
  }
}
```

## 📁 Estrutura do Projeto

```
ecommerce-cypress-tests/
├── cypress/
│   ├── e2e/                    # Specs de teste (pt‑BR)
│   │   ├── login-usuario.cy.js
│   │   ├── adicionar-ao-carrinho.cy.js
│   │   └── ...
│   ├── pages/                  # Page Objects (pt‑BR)
│   │   ├── PaginaAutenticacao.js
│   │   ├── PaginaCabecalho.js
│   │   └── ...
│   └── support/
│       └── commands.js         # Comandos customizados (DSL)
├── .husky/
│   └── pre-commit             # Hook de pre-commit
├── eslint.config.cjs          # Configuração ESLint
├── package.json               # Scripts e lint-staged
└── README.md                  # Este arquivo
```

## 📈 Releases

### v1.1.0 (atual)
- ✅ Tradução dos nomes de arquivos de specs e Page Objects para pt‑BR
- ✅ Títulos de `describe/it` traduzidos
- ✅ Adicionado ESLint (v9) com presets recomendados + Cypress
- ✅ Adicionado Husky + lint-staged (pre-commit)
- ✅ Remoção automática de comentários nos commits
- 🚧 **DSL implementada** para testes mais legíveis

### v1.0.0
- ✅ Suíte inicial de testes Cypress com POM

## 🗺️ Roadmap (próximos passos)

- [ ] **Expandir DSL** com mais comandos customizados
- [ ] **Criar biblioteca** de componentes reutilizáveis
- [ ] **Implementar BDD** (Behavior Driven Development)
- [ ] Padronizar mensagens de commit (Conventional Commits)
- [ ] CI (GitHub Actions) para lint + testes em matriz de navegadores
- [ ] Relatórios de testes (mochawesome / junit)
- [ ] Variáveis de ambiente seguras (.env) e perfis de execução

## 📜 Scripts úteis

| Comando | Descrição |
|---------|-----------|
| `npm run cy:open` | Abre o Cypress interativo |
| `npm run cy:chrome:headed` | Executa no Chrome com UI |
| `npm run cy:chrome:headless` | Executa no Chrome headless |
| `npm run cy:firefox:headed` | Executa no Firefox com UI |
| `npm run lint` | Roda o ESLint |
| `npm run lint:fix` | Corrige automaticamente |

## 🤝 Contribuindo

### 1. Crie uma branch
```bash
git checkout -b feat/nova-funcionalidade
# ou
git checkout -b chore/correcao-lint
```

### 2. Faça suas alterações
```bash
# Edite os arquivos...
# O Husky vai formatar automaticamente no commit
```

### 3. Commit (Husky vai executar automaticamente)
```bash
git add .
git commit -m "feat: adiciona novo teste de checkout"
```

### 4. Push e Pull Request
```bash
git push origin feat/nova-funcionalidade
# Abra PR no GitHub
```

## 🎯 Exemplos de Commits

### ✅ Boas práticas:
```bash
git commit -m "feat: adiciona teste de login com dados inválidos"
git commit -m "fix: corrige seletor do botão de adicionar ao carrinho"
git commit -m "docs: atualiza README com instruções do Husky"
git commit -m "refactor: reorganiza Page Objects em português"
git commit -m "feat: implementa nova DSL para testes de checkout"
```

### ❌ Evite:
```bash
git commit -m "fix"
git commit -m "corrige bug"
git commit -m "wip"
```

## 🎉 Benefícios do Husky no Projeto

### Antes do Husky:
- ❌ Código inconsistente
- ❌ Erros de linting em produção
- ❌ Commits com formatação ruim
- ❌ Tempo perdido corrigindo manualmente

### Depois do Husky:
- ✅ Código sempre formatado
- ✅ Qualidade garantida automaticamente
- ✅ Commits limpos e consistentes
- ✅ Foco no desenvolvimento, não na formatação

## 👨‍💻 Desenvolvedor

**Desenvolvido com ❤️ por [Neftali Oliveira](https://github.com/jenafree)**

### 📧 Contato
- **GitHub**: [@jenafree](https://github.com/jenafree)
- **LinkedIn**: [Neftali Oliveira](https://www.linkedin.com/in/neftali-oliveira/)

## 🔄 Como Contribuir

### 1. **Fork o Projeto**
```bash
# Clique no botão "Fork" no GitHub
# ou use o comando:
git clone https://github.com/SEU_USUARIO/ecommerce-cypress-tests.git
```

### 2. **Configure o Repositório Remoto**
```bash
cd ecommerce-cypress-tests
git remote add upstream https://github.com/jenafree/ecommerce-cypress-tests.git
```

### 3. **Mantenha seu Fork Atualizado**
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

### 4. **Crie uma Branch para sua Feature**
```bash
git checkout -b feat/sua-nova-funcionalidade
```

### 5. **Desenvolva e Teste**
```bash
# Faça suas alterações
npm run lint:fix  # Formata o código
npm run cy:chrome:headless  # Roda os testes
```

### 6. **Commit e Push**
```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
git push origin feat/sua-nova-funcionalidade
```

### 7. **Abra um Pull Request**
- Vá para o GitHub
- Clique em "New Pull Request"
- Selecione sua branch
- Descreva suas mudanças
- Aguarde a revisão

## 🎯 Tipos de Contribuições Aceitas

- ✅ **Novos testes** para funcionalidades não cobertas
- ✅ **Melhorias** nos testes existentes
- ✅ **Correções** de bugs nos testes
- ✅ **Documentação** melhorada
- ✅ **Otimizações** de performance
- ✅ **Traduções** e melhorias de texto
- ✅ **Novos comandos DSL** para melhorar legibilidade
- ✅ **Page Objects** adicionais

## 📄 Licença

Este projeto está licenciado sob a licença **ISC**.

---

**Em desenvolvimento ativo com ❤️ e qualidade automatizada por Neftali Oliveira! 🚀**

*Sinta-se à vontade para fazer fork, contribuir e melhorar este projeto!*

*🚧 Projeto em constante evolução - Novas funcionalidades sendo adicionadas regularmente!*
s