const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    exposed: {
      type: String,
      required: true,
    },
    photoId: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
  },
  { collection: "member" }
);

module.exports = mongoose.model("Member", MemberSchema);
