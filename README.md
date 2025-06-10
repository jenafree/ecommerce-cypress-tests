Testes E2E com Cypress no AutomationExercise

Este projeto contém a automação de fluxos críticos (registro, login, carrinho, checkout, avaliações e muito mais) para o site AutomationExercise, utilizando o framework Cypress e o padrão Page Object Model.

📋 Pré-requisitos

Antes de começar, verifique se você tem instalado em seu ambiente:

Node.js (versão >= 16.x)

npm ou yarn

Navegadores suportados: Chrome e Firefox

Passo a passo rápido para rodar os testes localmente:
# 1) Clone o repositório
git clone https://github.com/jenafree/ecommerce-cypress-tests.git

# 2) Acesse a pasta do projeto
cd ecommerce-cypress-tests

# 3) Abra no VS Code (opcional)
code .

# 4) Instale as dependências
npm install
# ou yarn install

# 5) Instale o Cypress (apenas na primeira vez)
npx cypress install

# 6) Execute em modo interativo
npm run cy:open

# 7) Execute headless no Chrome
npm run cy:chrome:headless





🔧 Configuração inicial

Git: remova o histórico antigo e inicialize um novo repositório limpo:
rm -rf .git
git init
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git add .
git commit -m "🎉 Inicializando repositório de testes"
git push -u origin main


⚙️ Scripts disponíveis

No package.json estão definidos os seguintes scripts para facilitar o seu fluxo de trabalho:

Script                                         Descrição 
npm run cy:open                               Abre o Test Runner interativo do Cypress
npm run cy:chrome:headed                      Executa todos os testes no Chrome (headed)
npm run cy:chrome:headless                    Executa todos os testes no Chrome (headless)
npm run cy:firefox:headed                     Executa todos os testes no Firefox (headed)
npm run cy:cloud                              Grava execução no Cypress Cloud (Dashboard)



🎯 Executando os testes

Modo interativo (IDE do Cypress)

npm run cy:open

Selecione o spec desejado (ex.: adicionar_avaliacao.cy.js).

Assista aos testes rodando em tempo real no navegador.

Linha de comando (headless)

npm run cy:chrome:headless

Os relatórios aparecerão no console e, se estiver usando plugins de relatório (por exemplo, mochawesome), na pasta configurada.
