# About

This is a monorepo with subfolders for the frontend and backend projects, each with their own README.

# Environment

All environment variables are defined in `frontend/.env` and `backend/.env`, make sure they match.

# Scripts

```
# Autoformat whole repo
prettier --write "./**/*.{js,jsx,json,ts,tsx}"
```

# Demo Features

- CRUD
- Query parameters
- Authentication + User Sessions
- DB relationships
  - one-to-one
  - one-to-many
  - many-to-many
- Infinite scrolling
- Pagination

# Considerations

- n+1 problem

# Code Sharing

Generate mock API that runs on frontend that matches backend API

# Reference

[https://github.com/lujakob/nestjs-realworld-example-app/tree/prisma](https://github.com/lujakob/nestjs-realworld-example-app/tree/prisma)

# Notes

- Code Sharing - Generate mock API that runs on frontend that matches backend API
  - Set up Swagger and export an Open API json file described here [https://github.com/nestjs/swagger/issues/158](https://github.com/nestjs/swagger/issues/158)
  - Generate MSW mocks using [https://github.com/zoubingwu/msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
  - To work properly, the Swagger JSON needs description metadata, which can be added to all routes easily using the [OpenAPI CLI Plugin](https://docs.nestjs.com/openapi/cli-plugin#overview)
