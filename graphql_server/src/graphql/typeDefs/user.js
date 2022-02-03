import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    username: String!
    password: String!
    avatar: String!
  }

  extend type Query {
    getProfile: User
  }

  type Token {
    token: String!
  }

  extend type Mutation {
    register(username: String!, password: String!, avatar: String): String
    login(username: String!, password: String!): Token
  }
`;
