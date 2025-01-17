import { Router } from 'express';
import { callbackController } from '../controllers/callback.js';

const router = Router();

router.get('/', callbackController);

export default router;
