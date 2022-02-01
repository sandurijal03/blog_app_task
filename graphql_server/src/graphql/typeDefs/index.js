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
    hello: String
  }
  type Mutation {
    register(
      name: String!
      email: String!
      password: String!
      avatar: String
    ): User
    login(email: String!, password: String!): User
  }
`;

export default typeDefs;
