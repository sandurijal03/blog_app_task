import { gql } from 'apollo-server-express';

export default gql`
  type Category {
    id: ID
    name: String!
  }

  type Post {
    id: ID
    title: String!
    description: String!
    photo: String
    user: User
    categories: [String]
  }

  input PostInput {
    title: String!
    description: String!
    photo: String
    categories: [String]
  }

  extend type Query {
    getCategory: [Category]

    getPost: [Post]
    getPostById(id: ID!): Post
    getUserPost: Post
  }

  extend type Mutation {
    addCategory(name: String!): Category

    createPost(postInput: PostInput): Post
    editPost(id: ID, postInput: PostInput): Post
    deletePost(id: ID!): String
  }
`;
