import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    avatar: String!
  }

  extend type Query {
    getProfile: User
  }

  extend type Mutation {
    register(
      name: String!
      email: String!
      password: String!
      avatar: String
    ): String
    login(email: String!, password: String!): String
  }
`;
