import Profile from '../models/FinancialProfile.js';

export const createProfile = async (req, res) => {
  try {
    const data = { ...req.body, userId: req.user };
    const profile = await Profile.create(data);
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
