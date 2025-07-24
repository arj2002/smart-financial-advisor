const express = require('express');
const { getRecommendation } = require('../controllers/aiAgentController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getRecommendation);

module.exports = router;