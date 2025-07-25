import express from 'express';
import { askAgent } from '../controllers/chatController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', auth, askAgent);

export default router;
