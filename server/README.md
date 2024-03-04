<h1 align="center">
    <br>
    A simple Polls application
</h1>

<p align="center">
  <a href="https://nodejs.org" target="_blank">
    <img alt="Node.js version" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://fastify.io" target="_blank">
    <img alt="Fastify logo" src="https://img.shields.io/badge/fastify-20232A?style=flat&logo=fastify&logoColor=white">
  </a>

  <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white" alt="Node.js logo" />

  <a href="https://www.prisma.io/" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white" alt="Prisma logo" />
  </a>

  <a href="https://www.postgresql.org" target="_blank">
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-&logo=postgresql&logoColor=white" alt="PostgreSQL logo" />
  </a>

  <a href="https://redis.io/" target="_blank">
    <img alt="Redis logo" src="https://img.shields.io/badge/Redis-dc382c?style=flat&logo=redis&logoColor=white">
  </a>

  <a href="https://www.typescriptlang.org" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript logo" />
  </a>
</p>

<div align="center">
  <details>
  <summary><b>Demo</b></summary>
  <div style="width: 90%;">
    <img alt="Polls usage application demonstration" src="demo.gif" />
  </div>
  </details>
</div>

<br>

<div align="center">
  <h4 align="center">read in the language</h4>
  <a href="https://github.com/gbdsantos/next-level-week-14-delivery-app/blob/master/server/README.pt-BR.md" hreflang="pt-br" alt="pt-br">🇧🇷 portuguese
  </a>
</div>

## About

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Next%20Level%20Week%20-%20Expert%2014%C2%AA%20Edition&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fgbdsantos%2Fnext-level-week-14-expert%2Fmaster%2Fserver%2Finsomnia-collection.json)

Polls system using Node.js, Postgres, **Redis**, TypeScript, and **WebSockets**. The Pub/Sub pattern was implemented in endpoint with WebSocket protocol, which ranks (counts) votes using a strategy made possible by Redis.

## Getting Start

[![Run in Hoppscotch](https://hopp.sh/badge-dark.svg)](https://hopp.sh/r/PfRlDXOnzFqJ)

```Bash
# 1. Install dependencies
npm install

# 2. Run app
npm run dev

# 3. Create a new Docker containers environment from docker-compose.yml file
docker compose up -d

# 4. Run Prisma migrations
npx prisma migrate dev

# 5. Run interface prisma studio [OPTIONAL]
npx prisma studio
```

<br>

## Executed commands

```bash
# Create project
npm init -y

# Install TypeScript and Node types
npm install typescript @types/node -D

# Inicialize TypeScript
npx tsc --init

# Install tsc
npm install tsx -D

# Install Fastify
npm install fastify

# Install PostgreSQL
npm install

# Create docker containers from docker-compose.yml file
docker compose up -d

# Install Prisma
npm install prisma -D

# Inicialize Prisma
npx prisma init

# Create prisma migration
npx prisma migrate dev

# Install Zod
npm install zod

# Install @fastify/cookie
npm install @fastify/cookie

# Install ioredis to manipulate Redis
npm install ioredis

# Install @fastify/websocket. Fastify module to handle with Websockets
npm install @fastify/websocket
```

<br>

## Local environment requirements

- Node.js >=18

<br>

## Technologies used

- [Fastify](https://fastify.io "Fastify - Fast and low overhead web framework, for Node.js") - Fast and low overhead web framework, for Node.js
- [Node.js](https://nodejs.org "Node.js - JavaScript runtime environment / plataform") - JavaScript runtime environment / plataform
- [PostgreSQL](https://www.postgresql.org "PostgreSQL - Open source relational database") - Open source relational database
- [Prisma](https://www.prisma.io "Prisma ORM - ORM (Object Mapping Relation) for Node.js and TypeScript") - ORM (Object Mapping Relation) for Node.js and TypeScript
- [Redis](https://redis.io "Redis - The open-source, in-memory data store used by millions of developers as a cache, vector database, document database, streaming engine, and message broker") - The open-source, in-memory data store used by millions of developers as a cache, vector database, document database, streaming engine, and message broker
- [TypeScript](https://www.typescriptlang.org "TypeScript - Programming language and superset for JavaScript") - Programming language and superset for JavaScript

---

Made with ❤️ by **Guilherme Bezerra** 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos "LinkedIn - Guilherme Bezerra")
