import { Router } from 'express';
import { login, register } from './index.controller';

const router = Router();

router.post('/login', (req, res) => {
  login(req, res);
});

router.post('/register', (req, res) => {
  register(req, res);
});

export default router;
