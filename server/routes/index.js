const express = require("express");
const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("Welcome to Smart Financial Advisor API");
});

module.exports = router;
