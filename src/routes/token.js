import { Router } from 'express';
import { appleMusicTokenController } from '../controllers/token.js';

const router = Router();

router.get('/', appleMusicTokenController);

export default router;
