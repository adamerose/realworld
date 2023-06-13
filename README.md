# About

This is a monorepo with subfolders for the frontend and backend projects each with their own README. This is a reference template for a full stack app using my current favourite tech stacks.

# Environment

All environment variables are defined in `frontend/.env` and `backend/.env`

# Code Sharing (todo)

Generate mock API that runs on frontend that matches backend API

NestJS API → [OpenAPI](https://docs.nestjs.com/openapi/introduction) → [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock) → MSW API

- `./realworld-backend/main.ts` exports to `./realworld-backend/swagger-spec.json`
- `npx msw-auto-mock ./realworld-backend/swagger-spec.json -o ./realworld-frontend/src/mocks/mock.js`
- Set up Swagger and export an Open API json file described here [https://github.com/nestjs/swagger/issues/158](https://github.com/nestjs/swagger/issues/158)
- Generate MSW mocks using [https://github.com/zoubingwu/msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
- To work properly, the Swagger JSON needs description metadata, which can be added to all routes easily using the [OpenAPI CLI Plugin](https://docs.nestjs.com/openapi/cli-plugin#overview)

# Notes / Keywords

- CRUD
  - Articles
  - Users
- Authentication
- Infinite scrolling / Pagination
- Error boundary
- Typescript
- n+1 problem
- DB relationships
  - one-to-one
  - one-to-many
  - many-to-many
