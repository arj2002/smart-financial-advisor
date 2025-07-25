import express from 'express';

const router = express.Router();

// your routes
router.post('/login', (req, res) => {
  res.send('Login route');
});

export default router;
