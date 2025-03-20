const express = require("express");
const { getUser } = require("../controller/user"); // Import the getUser function from the user controller
const authMiddleware = require("../middleware/auth_mware"); // Import the authMiddleware
// Create a new router
const router = express.Router();

// Define the route for the getUser function
// This route is protected by the authMiddleware
router.get("/user", authMiddleware, getUser);

// Export the router
module.exports = router;
