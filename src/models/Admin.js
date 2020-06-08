const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const AdminSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
  },
  { collection: "admin" }
);

AdminSchema.methods.generateJWT = (admin) => {
  const token = jwt.sign(
    {
      email: admin.email,
      _id: admin._id,
    },
    process.env.PRIVATE_KEY
  );
  return token;
};

module.exports = mongoose.model("Admin", AdminSchema);
