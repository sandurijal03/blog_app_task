require('dotenv').config();

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'first test route' });
});

export default app;
