const express = require('express');
const { askAgent } = require('../controllers/chatController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, askAgent);

module.exports = router;
