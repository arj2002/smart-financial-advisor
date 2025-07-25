import express from 'express';

const router = express.Router();

// Define your routes
router.get('/me', (req, res) => {
  res.send("User profile");
});

export default router;
