require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

import { resolvers, typeDefs } from './graphql';
import connectDB from './db/connectDB';
import User from './models/User';

async function mountServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
      return {
        User,
      };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  connectDB();
  server.applyMiddleware({ app });
  const port = process.env.PORT;
  await new Promise((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `server listening on port http://localhost:${port}${server.graphqlPath}`,
  );
}
mountServer();
