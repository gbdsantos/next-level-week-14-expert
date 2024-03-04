<h1 align="center">
    <br>
    Um aplicação simples de Enquetes
</h1>

<p align="center">
  <a href="https://nodejs.org" target="_blank">
    <img alt="logotipo do Node.js" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://fastify.io" target="_blank">
    <img alt="logotipo do Fastify" src="https://img.shields.io/badge/fastify-20232A?style=flat&logo=fastify&logoColor=white">
  </a>

  <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white" alt="Node.js logo" />

  <a href="https://www.prisma.io/" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white" alt="logotipo do Prisma" />
  </a>

  <a href="https://www.postgresql.org" target="_blank">
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-&logo=postgresql&logoColor=white" alt="logotipo do PostgreSQL" />
  </a>

  <a href="https://redis.io" target="_blank">
    <img alt="logotipo do Redis" src="https://img.shields.io/badge/Redis-dc382c?style=flat&logo=redis&logoColor=white">
  </a>

  <a href="https://www.typescriptlang.org" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="logotipo do TypeScript" />
  </a>
</p>

<div align="center">
  <details>
  <summary><b>Demo</b></summary>
  <div style="width: 90%;">
    <img alt="arquivo .GIF com demonstração de uso da aplicação" src="demo.gif" />
  </div>
  </details>
</div>

<br>

<div align="center">
  <h4 align="center">leia no idioma</h4>
  <a href="https://github.com/gbdsantos/next-level-week-14-delivery-app/blob/master/server/README.pt-BR.md" hreflang="en-us" alt="en-us">🇺🇸 inglês
  </a>
</div>

## Sobre

Sistema de enquests utilizando Node.js, Postgres, **Redis**, TypeScript e **WebSockets**.
Foi utilizado o *pattern* Pub/Sub na rota (*endpoint*) com o protocolo WebSocket que faz ranqueamento(contagem) de votos utilizando uma estratégia que o Redis possibilita.

## Início

[![Run in Hoppscotch](https://hopp.sh/badge-dark.svg)](https://hopp.sh/r/PfRlDXOnzFqJ)

```Bash
# 1. Instalar dependências
npm install

# 2. Executar aplicação
npm run dev

# 3. Criar um novo ambiente com container no docker à partir do arquivo docker-compose.yml
docker compose up -d

# 4. Executar migrations do Prisma
npx prisma migrate dev

# 5. Executar interface gráfica do prisma studio [OPCIONAL]
npx prisma studio
```

<br>

## Comandos executados

```bash
# Criar projeto
npm init -y

# Instalar TypeScript e tipagens do Node
npm install typescript @types/node -D

# Inicializar TypeScript
npx tsc --init

# Instalar tsc
npm install tsx -D

# Instalar Fastify
npm install fastify

# Instalar PostgreSQL
npm install

# Criar containers do docker à partir do arquivo docker-compose.yml
docker compose up -d

# Instalar Prisma
npm install prisma -D

# Inicializar Prisma
npx prisma init

# Criar migration do prisma
npx prisma migrate dev

# Instalar Zod
npm install zod

# Instalar @fastify/cookie
npm install @fastify/cookie

# Instalar ioredis para manipular o Redis
npm install ioredis

# Instalar @fastify/websocket. Módulo do Fastify para lidar com Websockets
npm install @fastify/websocket
```

<br>

## Requisitos do ambiente local

- Node.js >=18

<br>

## Tecnologias utilizadas

- [Fastify](https://fastify.io "Fastify - Framework web rápido e de baixa , para Node.js") - Framework web rápido e de baixo custo computacional, para Node.js
- [Node.js](https://nodejs.org "Node.js - Ambiente de execução JavaScript / plataforma") - Ambiente de execução JavaScript / plataforma
- [PostgreSQL](https://www.postgresql.org "PostgreSQL - Banco de dados relacional de código aberto") - Banco de dados relacional de código aberto
- [Prisma](https://www.prisma.io "Prisma ORM - ORM (Mapeamento Objeto Relacional) para Node.js e TypeScript") - ORM (Mapeamento Objeto Relacional) para Node.js e TypeScript
- [Redis](https://redis.io "Redis - Armazenamento de dados em memória de código aberto, usado por milhões de desenvolvedores como cache, banco de dados de vetores, banco de dados de documentos, motor de streaming e message broker") - Armazenamento de dados em memória de código aberto, usado por milhões de desenvolvedores como cache, banco de dados de vetores, banco de dados de documentos, motor de streaming e message broker
- [TypeScript](https://www.typescriptlang.org "TypeScript - Linguagem de programação e superset para JavaScript") - Linguagem de programação e superset para JavaScript


---

Feito com ❤️ por **Guilherme Bezerra** 👋 [Entre em contato!](https://www.linkedin.com/in/gbdsantos "LinkedIn - Guilherme Bezerra")
