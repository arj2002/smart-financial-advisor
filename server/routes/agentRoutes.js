import express from 'express';
import { getRecommendation } from '../controllers/aiAgentController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/recommendation', auth, getRecommendation);

export default router;
