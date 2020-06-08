const Joi = require("@hapi/joi");
const verificationSchema = {
  member: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    birthdate: Joi.date().iso().required(),
  }),
  auth: {
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  },
};

module.exports = verificationSchema;
