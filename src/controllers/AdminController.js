const Admin = require("../models/Admin");
const hashPassword = require("../utils/hashPassword");
const bcrypt = require("bcrypt");

class AdminController {
  async auth(req, res) {
    const { email, password } = req.body;
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) throw "Email is incorret";

      const isPasswordValid = await bcrypt.compare(
        password,
        admin.password_hash
      );
      if (isPasswordValid == false) throw "Password is incorrect";

      const token = admin.generateJWT(admin);
      return res.header("x-auth-token", token).json({ authenticated: true });
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }
  async create(req, res) {
    const { email, password } = req.body;
    try {
      const password_hash = await hashPassword(password);
      const admin = await Admin.create({
        email,
        password_hash,
      });

      return res.json(admin);
    } catch (error) {
      return res.status(400).json({
        error: error.message || error,
      });
    }
  }
}

module.exports = new AdminController();
