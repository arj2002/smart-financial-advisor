const { Tool } = require("langchain/tools");
const FinancialProfile = require("../../models/FinancialProfile");

const getProfileTool = new Tool({
  name: "get_user_profile",
  description: "Fetches the user's financial profile from the database",
  func: async (userId) => {
    try {
      const profile = await FinancialProfile.findOne({ user: userId });
      if (!profile) return "No profile found.";
      return JSON.stringify(profile);
    } catch (err) {
      return `Error fetching profile: ${err.message}`;
    }
  },
});

module.exports = getProfileTool;