const bcrypt = require("bcrypt");

module.exports = async (password) => {
  try {
    const salt = await bcrypt.genSalt(6);
    const passwordHashed = await bcrypt.hash(password, salt);

    return passwordHashed;
  } catch (error) {
    return error;
  }
};
