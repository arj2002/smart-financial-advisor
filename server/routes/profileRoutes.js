const express = require('express');
const { createProfile, getProfile } = require('../controllers/profileController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createProfile);
router.get('/', auth, getProfile);

module.exports = router;
