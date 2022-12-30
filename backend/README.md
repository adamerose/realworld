## Running

```
npm run start:dev
```

## Setup

```
# NestJS Setup
npm i -g @nestjs/cli
nest new backend
cd backend

# Prisma + Prisma Client (https://docs.nestjs.com/recipes/prisma)
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
npx prisma migrate dev --name init

# Swagger UI (https://docs.nestjs.com/recipes/swagger)
# Env config (https://docs.nestjs.com/techniques/configuration)
```

## Prisma

```
npx prisma generate
npx prisma migrate dev --name init
```
