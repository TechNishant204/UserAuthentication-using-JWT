const { verifyToken } = require("../utils/jwt");

const authMiddleware = async (req, res, next) => {
  try {
    authHeader = req.headers["authorization"];
    console.log("authHeader:", authHeader);
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "No token provided - Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    console.log("tokenFetched:", token);
    const decodedPayload = await verifyToken(token);
    console.log("verifyTokenResponse:", decodedPayload);
    if (!decodedPayload) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    req.user = decodedPayload;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = authMiddleware;
