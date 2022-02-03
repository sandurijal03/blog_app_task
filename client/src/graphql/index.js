import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query {
    getProfile {
      id
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
