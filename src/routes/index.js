import { Router } from 'express';
import authRouter from './auth.js';
import callbackRouter from './callback.js';
import tokenRouter from './token.js';

const router = Router();

router.use('/login', authRouter);
router.use('/callback', callbackRouter);
router.use('/token', tokenRouter);

export default router;
