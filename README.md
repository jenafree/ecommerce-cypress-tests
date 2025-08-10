E2E com Cypress no AutomationExercise

Automação de fluxos críticos do e‑commerce (cadastro, login, busca, carrinho, checkout, avaliações e mais) usando Cypress 12 e Page Object Model. O projeto foi traduzido para pt‑BR e agora possui qualidade automatizada com ESLint + Husky (pre-commit) e remoção automática de comentários no commit.

O que tem aqui
- Testes E2E organizados em `cypress/e2e`
- Page Objects em `cypress/pages` (nomes em pt‑BR)
- Comando customizado `cy.login` em `cypress/support/commands.js`
- ESLint com regras recomendadas + rule set para Cypress
- Husky + lint-staged: padronização automática no pre-commit
- Remoção automática de comentários nos arquivos staged

Requisitos
- Node.js >= 18 (recomendado) / >= 16 (mínimo)
- npm (ou yarn/pnpm)
- Navegadores: Chrome e Firefox

Instalação
1) Clone o repositório
   git clone https://github.com/jenafree/ecommerce-cypress-tests.git
   cd ecommerce-cypress-tests

2) Instale dependências
   npm install

3) (Opcional) Instale o Cypress na primeira vez
   npx cypress install

Como rodar os testes
- Interativo (Test Runner)
  npm run cy:open

- Headless (Chrome)
  npm run cy:chrome:headless

- Apenas um spec (ex.: login)
  npm run cy:chrome:headless -- --spec cypress/e2e/login-usuario.cy.js

Qualidade e Git Hooks
- Lint manual
  npm run lint

- Lint com correções
  npm run lint:fix

- Husky (pre-commit)
  - Executa lint-staged
  - Aplica ESLint com autofix
  - Remove comentários dos arquivos staged (via strip-comments)

Observação: comentários de licença ou cabeçalhos especiais também serão removidos pelo hook. Se precisar manter exceções, ajustamos o padrão do lint-staged.

Estrutura (resumo)
- cypress/
  - e2e/ … specs em pt‑BR
  - pages/ … page objects em pt‑BR (ex.: `PaginaTodosProdutos.js`, `PaginaCabecalho.js`)
  - support/ … comandos customizados
- eslint.config.js … configuração do ESLint (v9)
- .husky/pre-commit … hook de pre-commit com lint-staged
- package.json … scripts e lint-staged

Releases
- v1.1.0 (atual)
  - Tradução dos nomes de arquivos de specs e Page Objects para pt‑BR
  - Títulos de `describe/it` traduzidos
  - Adicionado ESLint (v9) com presets recomendados + Cypress
  - Adicionado Husky + lint-staged (pre-commit)
  - Remoção automática de comentários nos commits

- v1.0.0
  - Suíte inicial de testes Cypress com POM

Roadmap (próximos passos)
- Padronizar mensagens de commit (Conventional Commits)
- CI (GitHub Actions) para lint + testes em matriz de navegadores
- Relatórios de testes (mochawesome / junit)
- Variáveis de ambiente seguras (.env) e perfis de execução

Scripts úteis
- npm run cy:open                 Abre o Cypress interativo
- npm run cy:chrome:headed        Executa no Chrome com UI
- npm run cy:chrome:headless      Executa no Chrome headless
- npm run cy:firefox:headed       Executa no Firefox com UI
- npm run lint                    Roda o ESLint
- npm run lint:fix                Corrige automaticamente

Contribuindo
- Crie uma branch a partir de main (ex.: `feat/…`, `chore/…`)
- Faça commits pequenos e claros
- Abra PR com descrição do que foi alterado

Licença
ISC
