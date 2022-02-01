require('dotenv').config();

import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world',
  },
};

async function mountServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  const port = process.env.PORT;
  await new Promise((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `server listening on port http://localhost:${port}${server.graphqlPath}`,
  );
}
mountServer();
