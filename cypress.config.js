/// <reference types="cypress" />

// Importa a função para definir a configuração do Cypress
const { defineConfig } = require("cypress");

// Plugin para baixar arquivos durante os testes
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

// Plugin para verificar se os downloads foram concluídos com sucesso
const { verifyDownloadTasks } = require('cy-verify-downloads');

// Exporta a configuração do Cypress usando defineConfig para melhor validação
module.exports = defineConfig({
  // Tempo (em ms) que o Cypress aguarda pelos comandos padrão antes de falhar
  defaultCommandTimeout: 15000,
  
  // Tempo (em ms) máximo que o Cypress espera o carregamento completo da página
  pageLoadTimeout: 25000,
  
  // Tempo (em ms) máximo para aguardar respostas de requisições XHR/Ajax
  requestTimeout: 15000,
  
  // Desabilita a geração de vídeos dos testes para economizar espaço em disco
  video: false,
  
  // ID do projeto no Dashboard do Cypress (se disponível)
  projectId: "",
  
  e2e: {
    // Configura eventos de nó (plugins) antes de cada execução de teste E2E
    setupNodeEvents(on, config) {
      // Registra a tarefa 'downloadFile' para permitir baixar arquivos em testes
      on('task', { downloadFile });
      
      // Registra a tarefa de verificação de downloads concluídos
      on('task', verifyDownloadTasks);
    },
  },
});

// normaliza EOF (coment�rio sem efeito)

// normaliza EOF (coment�rio sem efeito)
