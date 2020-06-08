const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");
  try {
    if (!token) return res.status(401).json({ error: "token is missing" });

    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(403).send("Access denied. invalid token provided");
  }
};
