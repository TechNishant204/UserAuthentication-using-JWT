const bcrypt = require("bcrypt");

const saltRounds = 10;

//hash the password using bcrypt and return the hashed password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

//compare password and hashed password to check if they match or not
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword); // returns a boolean and resolves the promise
};

module.exports = { hashPassword, comparePassword };
