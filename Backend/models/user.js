var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});
var User = mongoose.model("User",userSchema);

userSchema.methods.generateHashedPassword = async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};
function validateUser(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().min(3).max(10).required(),
    password: Joi.string().min(3).max(10).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
function validateUserLogin(data) {
  const schema = Joi.object({
    email: Joi.string().email().min(3).max(10).required(),
    password: Joi.string().min(3).max(10).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports={User,validateUser,validateUserLogin}