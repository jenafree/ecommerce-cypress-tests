Testes E2E com Cypress no AutomationExercise

Este projeto contém a automação de fluxos críticos (registro, login, carrinho, checkout, avaliações e muito mais) para o site AutomationExercise, utilizando o framework Cypress e o padrão Page Object Model.

📋 Pré-requisitos

Antes de começar, verifique se você tem instalado em seu ambiente:

Node.js (versão >= 16.x)

npm ou yarn

Navegadores suportados: Chrome e Firefox

🚀 Como clonar o repositório
# Clona o repositório no seu computador
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Navegue até a pasta do projeto
cd SEU_REPOSITORIO

Certifique-se de substituir SEU_USUARIO/SEU_REPOSITORIO pelo caminho correto do seu GitHub.

📦 Instalação das dependências

Instale todas as dependências necessárias executando:

npm install
# ou, se preferir usar yarn:
yarn install

Esse comando irá baixar o Cypress, Faker e todos os plugins configurados (download de arquivos, testes de iFrame, etc.).

🔧 Configuração inicial

Git: remova o histórico antigo e inicialize um novo repositório limpo:
rm -rf .git
git init
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git add .
git commit -m "🎉 Inicializando repositório de testes"
git push -u origin main

.gitignore: garantimos que pastas como node_modules/, cypress/videos/ e cypress/screenshots/ não sejam versionadas.

⚙️ Scripts disponíveis

No package.json estão definidos os seguintes scripts para facilitar o seu fluxo de trabalho:

Script                                         Descrição 
npm run cy:open                               Abre o Test Runner interativo do Cypress
npm run cy:chrome:headed                      Executa todos os testes no Chrome (headed)
npm run cy:chrome:headless                    Executa todos os testes no Chrome (headless)
npm run cy:firefox:headed                     Executa todos os testes no Firefox (headed)
npm run cy:cloud                              Grava execução no Cypress Cloud (Dashboard)

Se precisar adicionar mais scripts, basta editar o package.json na seção scripts.

🎯 Executando os testes

Modo interativo (IDE do Cypress)

npm run cy:open

Selecione o spec desejado (ex.: adicionar_avaliacao.cy.js).

Assista aos testes rodando em tempo real no navegador.

Linha de comando (headless)

npm run cy:chrome:headless

Os relatórios aparecerão no console e, se estiver usando plugins de relatório (por exemplo, mochawesome), na pasta configurada.

📁 Estrutura de pastas
├── cypress/
│   ├── e2e/             # Specs de teste (arquivos .cy.js)
│   ├── support/
│   │   ├── paginas/     # Page Objects
│   │   └── commands.js  # Comandos customizados
├── .gitignore          # Ignora node_modules, vídeos, screenshots, etc.
├── cypress.config.js   # Configuração geral do Cypress
├── package.json        # Dependências e scripts
└── README.md           # Este arquivo

🤝 Contribuições

Faça um fork deste projeto.

Crie uma branch com a feature: git checkout -b feature/nova-funcionalidade.

Faça commit das suas alterações: git commit -m 'Adiciona nova funcionalidade'.

Push para a branch: git push origin feature/nova-funcionalidade.

Abra um Pull Request.

📄 Licença

Este projeto está licenciado sob a licença ISC.

Desenvolvido com ❤️ Bom teste! 🚀