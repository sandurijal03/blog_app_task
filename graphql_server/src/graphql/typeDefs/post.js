import { gql } from 'apollo-server-express';

export default gql`
  type Post {
    _id: ID
    title: String!
    description: String!
    photo: String
    user: User
    categories: [String]
    createdAt: String
  }

  input PostInput {
    title: String!
    description: String
    photo: String
    categories: [String]
  }

  extend type Query {
    getAllPost: [Post]
    getPostById(id: ID!): Post
    getUserPost(username: String!): [Post]
  }

  extend type Mutation {
    createPost(postInput: PostInput): Post
    editPost(id: ID, postInput: PostInput): Post
    deletePost(id: ID!): Post
  }
`;
