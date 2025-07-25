import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { age, income, riskTolerance } = req.body;

  if (!age || !income || !riskTolerance) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  console.log('🟢 Profile received:', { age, income, riskTolerance });
  return res.status(200).json({ message: 'Profile saved' });
});

export default router;
