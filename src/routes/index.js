import { Router } from 'express';
import authRouter from './auth.js';
import callbackRouter from './callback.js';

const router = Router();

router.use('/login', authRouter);
router.use('/callback', callbackRouter);

export default router;
