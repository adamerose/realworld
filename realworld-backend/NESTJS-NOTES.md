# Setup

```
npm install -g @nestjs/cli
nest new realworld-backend

# Prisma - https://docs.nestjs.com/recipes/prisma#prisma
npm install prisma --save-dev
npx prisma init
npx prisma migrate dev --name init

# Swagger - https://docs.nestjs.com/openapi/introduction#setup-options
npm install --save @nestjs/swagger

# Config - https://docs.nestjs.com/techniques/configuration#configuration
npm i --save @nestjs/config

# Pipes - https://docs.nestjs.com/pipes#class-validator
npm i --save class-validator class-transformer

# Authentication
npm install argon2
npm install @faker-js/faker --save-dev
# https://docs.nestjs.com/security/authentication#authentication-requirements
npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local
# https://docs.nestjs.com/security/authentication#jwt-functionality
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt
```

# CLI

```
nest generate resource articles

npx prisma migrate reset
```

# Concepts

# Prisma
