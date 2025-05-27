✅ README.md

# 🧪 Projeto de Automação de Testes com Cypress

Este repositório contém a automação de testes end-to-end do site [Automation Practice](http://www.automationpractice.pl/index.php), utilizando **Cypress** como framework principal.

## ---

## 📁 Estrutura do Projeto

cypress/
│
├── e2e/ # Casos de teste organizados em arquivos .cy.js
├── fixtures/ # Dados mockados (ex: userLogin.json)
├── support/
│ ├── commands.js # Comandos customizados
│ ├── e2e.js # Suporte global aos testes
│ └── helpers.js # Funções auxiliares (ex: random 🧪 Desafio Finch — Automação de Testes com Cypress

Projeto de automação end-to-end utilizando o framework Cypress para validar funcionalidades do site Automation Practice. Este projeto simula fluxos reais de um usuário, incluindo criação de conta, login, gerenciamento de endereços, compras e envio de mensagens.

## ---

🚀 Tecnologias Utilizadas
✅ Cypress — Framework de testes E2E

✅ Faker.js — Geração de dados fictícios

✅ cypress-file-upload — Upload de arquivos em testes

✅ JavaScript (ES6+)

## ---

🧩 Estrutura do Projeto
bash
Copiar
Editar
Desafio-Finch/
├── cypress/
│ ├── e2e/ # Casos de teste organizados
│ ├── fixtures/ # Dados simulados (ex: userLogin.json)
│ └── support/
│ ├── commands.js # Comandos customizados
│ ├── e2e.js # Configurações globais
│ └── helpers.js # Funções auxiliares
├── cypress.config.js # Configurações do Cypress
├── package.json # Dependências e scripts
└── .gitignore # Arquivos e pastas ignorados pelo Git

## ---

🧪 Casos de Teste Implementados
✅ Criação de nova conta

✅ Login com sucesso

✅ Login com e-mail vazio

✅ Login com senha vazia

✅ Criação de endereço

✅ Edição e exclusão de endereço

✅ Compra de produto

✅ Upload de arquivo no formulário "Contact Us"

## ---

⚙️ Como Executar os Testes

1. Clone o repositório: git clone https://github.com/AbnerDavis/Desafio-Finch.git
   cd Desafio-Finch

2. Instale as dependências: npm install

3. Execute os testes
   Modo interativo (GUI): npx cypress open
   Modo headless (terminal): npx cypress run

---

# 📌 Observações

# Os dados de login utilizados nos testes estão no arquivo cypress/fixtures/userLogin.json.

# Os comandos customizados estão definidos em cypress/support/commands.js.

# As funções auxiliares, como seleção de gênero aleatório, estão em cypress/support/helpers.js.

_Desenvolvido com 💻 por Abner Davis — 2025_

---
