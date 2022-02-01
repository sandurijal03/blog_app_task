import { Router } from 'express';

import authRouter from './auth/index.routes';
import blogRouter from './blogs/index.routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/blog', blogRouter);

export default router;
