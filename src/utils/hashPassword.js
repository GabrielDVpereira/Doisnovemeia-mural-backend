const bcrypt = require("bcrypt");

module.exports = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    return passwordHashed;
  } catch (error) {
    return error;
  }
};
