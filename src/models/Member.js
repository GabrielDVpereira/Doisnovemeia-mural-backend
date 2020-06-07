const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { collection: "member" }
);

module.exports = mongoose.model("Member", MemberSchema);
