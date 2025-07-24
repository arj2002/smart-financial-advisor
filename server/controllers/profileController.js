const Profile = require('../models/FinancialProfile');

exports.createProfile = async (req, res) => {
  const data = { ...req.body, userId: req.user };
  const profile = await Profile.create(data);
  res.status(201).json(profile);
};

exports.getProfile = async (req, res) => {
  const profile = await Profile.findOne({ userId: req.user });
  res.json(profile);
};
