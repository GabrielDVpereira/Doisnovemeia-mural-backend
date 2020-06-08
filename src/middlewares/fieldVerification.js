const verificationSchema = require("../utils/verificationSchema");

module.exports = {
  async member(req, res, next) {
    try {
      await verificationSchema.member.validateAsync(req.body);
      return next();
    } catch (error) {
      return res.status(400).json({
        error: error.message || error,
      });
    }
  },
  async auth(req, res, next) {
    try {
      await verificationSchema.auth.validateAsync(req.body);
      return next();
    } catch (error) {
      return res.status(400).json({
        error: error.message || error,
      });
    }
  },
};
