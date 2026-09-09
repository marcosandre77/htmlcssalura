# Frontend Architecture

## Stack

- React
- TypeScript
- Tailwind CSS
- Docker

## MVC Adaptado

### Model

Responsável por:

- interfaces TypeScript;
- contratos de dados;
- serviços de API.

### View

Responsável por:

- componentes React;
- apresentação visual;
- estilização Tailwind CSS.

### Controller

Responsável por:

- custom hooks;
- estado da aplicação;
- integração entre View e Model.

## Branch Strategy

- main: produção
- develop: integração
- feature/*: novas funcionalidades
- bugfix/*: correções
- chore/*: configurações
