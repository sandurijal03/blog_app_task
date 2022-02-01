require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { resolvers, typeDefs } from './graphql';
import connectDB from './db/connectDB';
import User from './models/User';

const auth = require('./middlewares/auth');

const app = express();
connectDB();

app.use(auth);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const { isAuth, user } = req;
    return {
      User,
      req,
      isAuth,
      user,
    };
  },
});

async function mountServer() {
  try {
    await server.start();
    server.applyMiddleware({
      app,
    });
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(
        `server listening on port http://localhost:${port}${server.graphqlPath}`,
      );
    });
  } catch (err) {
    console.log(err);
  }
}
mountServer();
