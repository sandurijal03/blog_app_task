import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    avatar: String!
  }

  type Query {
    getProfile: User
  }

  type Mutation {
    register(
      name: String!
      email: String!
      password: String!
      avatar: String
    ): String
    login(email: String!, password: String!): String
  }
`;

export default typeDefs;
