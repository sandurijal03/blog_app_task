require('dotenv').config();

import path from 'path';

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload';

import { resolvers, typeDefs } from './graphql';
import connectDB from './db/connectDB';
import User from './models/User';
import Category from './models/Category';
import Post from './models/Post';
import Image from './models/Image';

const auth = require('./middlewares/auth');

const app = express();
connectDB();

app.use(auth);
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../client/public/uploads')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: false,
  context: ({ req }) => {
    const { isAuth, user } = req;
    return {
      User,
      Category,
      Post,
      Image,
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
