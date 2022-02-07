# A Fullstack blog app with node and react

## Server

- apollo-server-express package is used to create graphql api.
- login and registration feature implemented.
- create blog post, edit blog post, view blog post, delete blog post feature is created.
- PORT, JWT_SECRET,DB_URI are three environment variables used

## Client

- Project is initialized with create react app
- Apollo-Client is used for state management
- registration and login feature is implemented
- user can create blog, edit blog,
- all persons can view blog but cannot neither edit, not create until becomes user which is controlled with middlewares
- no any style frameworks is used instead written every css with the help of styled-components which is based on sass

### Features Not Implemented

- Frontend Testing
- linting
