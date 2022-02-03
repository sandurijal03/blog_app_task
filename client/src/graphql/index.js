import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query {
    getProfile {
      _id
      username
      avatar
    }
  }
`;

export const LOGIN_USER = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation ($username: String!, $password: String!) {
    register(username: $username, password: $password)
  }
`;

export const GET_POSTS = gql`
  query {
    getPost {
      _id
      title
      photo
      description
      user {
        username
      }
      categories
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($postInput: PostInput) {
    createPost(postInput: $postInput)
  }
`;

export const EDIT_POST = gql`
  mutation EditPost($editPostId: ID, $editPostPostInput2: PostInput) {
    editPost(id: $editPostId, postInput: $editPostPostInput2) {
      _id
      title
      description
      categories
      photo
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId)
  }
`;
