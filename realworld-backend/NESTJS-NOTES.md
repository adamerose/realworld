# References

- [https://github.com/vladwulf/nestjs-api-tutorial](https://github.com/vladwulf/nestjs-api-tutorial)
  - [https://www.youtube.com/watch?v=GHTA143_b-s](https://www.youtube.com/watch?v=GHTA143_b-s)

# Concepts

## Controllers

# Steps

## CLI

```
# Create new CRUD resource
nest generate resource articles

npx prisma migrate reset
```

## Swagger

## Config

[https://docs.nestjs.com/techniques/configuration](https://docs.nestjs.com/techniques/configuration)

- Set up in app module imports using `ConfigModule.forRoot({ isGlobal: true, })`
- Access config inside services using standard injection `constructor(private configService: ConfigService) {}`
- To access config outside services, use `registerAsync` + `registerAs` like [this](https://stackoverflow.com/a/74903830/3620725)
- Install `@types/node` so we can define environment variable types in `**environment.d.ts**`

## Authentication

[https://docs.nestjs.com/security/authentication](https://docs.nestjs.com/security/authentication)

- See `users` and `auth` modules
- Implement a `/login` endpoint which takes a DTO containing username/password and returns a JWT token
- Protect endpoints

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

# Concepts

# Prisma

# Complaints

- `configService.get` isn't type safe and has no autocomplete. Why can't configService have a TypeScript interface of environment variables?
- Why using injection? Why can't I just directly import a service like a typical JS module
- Can't extend services [https://www.reddit.com/r/nestjs/comments/13jsq7p/comment/jkh8sub](https://www.reddit.com/r/nestjs/comments/13jsq7p/comment/jkh8sub)
- Default intellisense suggests absolute paths but they are not even supported
  - [https://github.com/nestjs/typescript-starter/issues/74#issuecomment-464698726](https://github.com/nestjs/typescript-starter/issues/74#issuecomment-464698726)
