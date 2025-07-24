// ✅ Correct format for authRoutes.js
const express = require('express');
const router = express.Router();

// your routes
router.post('/login', (req, res) => {
  res.send('Login route');
});

module.exports = router;
