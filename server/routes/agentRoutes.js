import express from 'express';
import { getRecommendation } from '../controllers/aiAgentController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', auth, getRecommendation);

export default router;
