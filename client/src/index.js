import React from 'react';
import { render } from 'react-dom';
import {
  InMemoryCache,
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from '@apollo/client';

import Routing from './Routing';

const httpLink = new HttpLink({
  uri: 'http://localhost:8848/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = document.querySelector('#root');
render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routing />
    </ApolloProvider>
  </React.StrictMode>,
  root,
);
