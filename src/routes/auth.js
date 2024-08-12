import { Router } from 'express';
import { spotifyLoginController } from '../controllers/auth.js';

const router = Router();

router.get('/', spotifyLoginController);

export default router;
