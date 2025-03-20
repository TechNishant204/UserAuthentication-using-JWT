const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const secretKey = process.env.JWT_SECRET;

// Create a JWT token and return it
const createToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    secretKey,
    {
      expiresIn: "1h",
    }
  );
  return token;
};

// Verify a JWT and return the decoded payload
function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey); // returns the decoded payload
  } catch (err) {
    return null;
  }
}

module.exports = { createToken, verifyToken };
