const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  console.log("=================================");
  console.log("AUTH HEADER:", req.headers.authorization);
  console.log("JWT SECRET:", process.env.JWT_SECRET);

  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No token"
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token format invalid"
      });
    }

    console.log("TOKEN:", token);

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("DECODED:", decoded);

    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    next();

  } catch (error) {

    console.log("JWT ERROR =>", error);

    return res.status(401).json({
      message: "Unauthorized"
    });

  }
};

module.exports = protect;