import express from 'express';

const router = express.Router();

// ✅ Login route
router.post('/login', (req, res) => {
  res.send('Login route');
});

// ✅ Signup route
router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing email or password' });
  }

  // Here, you'd normally add the user to a database
  console.log(`User signed up with email: ${email}`);

  res.status(200).json({ message: 'Signup successful' });
});

export default router;
