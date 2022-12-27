# Frontend

## Setup

```
# Vite Setup
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install

# Core dependencies
npm install @reduxjs/toolkit react-redux axios @types/react-redux

# Redux dependencies
npm install @types/react-redux
```

## Running

```
(cd frontend && npm run dev)
```

# Backend

## Setup

```
# NestJS Setup
npm i -g @nestjs/cli
nest new backend
cd backend

# Prisma + Prisma Client (https://docs.nestjs.com/recipes/prisma)
npx prisma init
npx prisma migrate dev --name init
npm install @prisma/client

# Swagger UI (https://docs.nestjs.com/recipes/swagger)

# Hot Reload (https://docs.nestjs.com/recipes/hot-reload)

# Env config (https://docs.nestjs.com/techniques/configuration)
npm i --save @nestjs/config
```

## Prisma

```
npx prisma generate
npx prisma migrate dev --name init
```

## Running

```
(cd backend && npm run start:dev)
```

# Environment

All environment variables are defined in `.env` which has hard symlinks pointing to it at `frontend/.env` and `backend/.env`

# Reference

[https://github.com/lujakob/nestjs-realworld-example-app/tree/prisma](https://github.com/lujakob/nestjs-realworld-example-app/tree/prisma)

# Scratch

- Installed Git Bash with "Enable symbolic links"
- Enabled Developer Mode on Windows 11
- https://stackoverflow.com/a/67834798/3620725
  - setx MSYS winsymlinks:nativestrict
- mkdir symlink-test
- cd symlink-test
- ln "./.env" "./backend/.env"
