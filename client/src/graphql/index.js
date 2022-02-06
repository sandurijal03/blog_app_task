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
    getAllPost {
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
    createPost(postInput: $postInput) {
      _id
      categories
      createdAt
      description
      photo
      title
      user {
        username
      }
    }
  }
`;

export const EDIT_POST = gql`
  mutation EditPost($id: ID, $postInput: PostInput) {
    editPost(id: $id, postInput: $postInput) {
      _id
      title
      description
      categories
      createdAt
      photo
      user {
        username
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId) {
      _id
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    getPostById(id: $id) {
      _id
      title
      description
      photo
      categories
      user {
        username
      }
    }
  }
`;

export const FILE_UPLOAD = gql`
  mutation FILE_UPLOAD($file: Upload!) {
    singleUpload(file: $file)
  }
`;

export const GET_USER_POST = gql`
  query GetUserPost($username: String!) {
    getUserPost(username: $username) {
      _id
      title
      description
      photo
      categories
      createdAt
      user {
        username
      }
    }
  }
`;
