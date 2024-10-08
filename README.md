# user-registration-api

![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Arquivo Insomnia](#arquivo-insomnia)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

Este projeto foca no uso do Prisma ORM para interação com bancos de dados em aplicações Node.js.
O objetivo é demonstrar como configurar e utilizar o Prisma em um ambiente de desenvolvimento moderno.

## Tecnologias Utilizadas

- Node.js
- Prisma ORM
- Docker
- Yarn
- Express
- Bcrypt
- Cors
- Dotenv
- Sucrase (para desenvolvimento)
- Nodemon (para desenvolvimento)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 12 ou superior)
- Yarn
- Docker
- Git

## Instalação

1. Inicie seu Docker Desktop

2. Clone o repositório:

   ```
   git clone https://github.com/mdanieldantas/API-Cadastro.git
   ```

3. Navegue até o diretório do projeto:

   ```
   cd user-registration-api
   ```

4. Instale as dependências:

   ```
   yarn install
   ```

5. Inicie o ambiente Docker:

   ```
   docker-compose up
   ```

6. Configure o Prisma:

   ```

   npx prisma migrate dev --name init
   ```

## Uso

1. Para iniciar o servidor de desenvolvimento:

   ```
   yarn start
   ```

## Arquivo Insomnia

O arquivo <b><code>insomnia.json</code></b> exporta várias informações do Insomnia, incluindo:

1. <b>Requisições</b>: Detalhes sobre as requisições HTTP criadas, como URLs, métodos (GET, POST, etc.), cabeçalhos e corpo da requisição.

2. <b>Ambientes</b>: Configurações de ambiente, incluindo variáveis utilizadas nas requisições.

3. <b>Coleções</b>: Organização das requisições em pastas ou grupos.

4. <b>Autenticação</b>: Informações sobre métodos de autenticação utilizados nas requisições.

5. <b>Cookies</b>: Dados de cookies associados às requisições.

Este arquivo é útil para compartilhar e importar configurações do Insomnia entre membros da equipe ou ambientes de desenvolvimento.

## Contribuição

Contribuições são sempre bem-vindas! Por favor, siga estes passos:

1. Faça um fork do projeto
2. Crie sua feature branch: `git checkout -b minha-nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona alguma feature'`
4. Push para a branch: `git push origin minha-nova-feature`
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

**M. Daniel Dantas**

**Linkedin:** https://www.linkedin.com/in/mdanieldantas

**Email:** contatomarcosdgomes@gmail.com

**Link do Projeto:** [https://github.com/mdanieldantas/API-Cadastro.git](https://github.com/mdanieldantas/API-Cadastro.git)
