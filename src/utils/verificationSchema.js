const Joi = require("@hapi/joi");
const verificationSchema = {
  member: Joi.object({
    name: Joi.string().required(),
    exposed: Joi.string().required().min(5).max(50)
  }),
  auth: {
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  },
};

module.exports = verificationSchema;
