const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // check if logged in using token
    if (!token) {
      return res.status(401).json({ errorMessage: "Unauthorized" });
    }

    // check if unique token
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified.user;
    
    next();
  } catch (error) {
    console.log("AUTHENTICATION ERROR", error);
    res.status(401).json({ errorMessage: "Unauthorized" }).send();
  }
};

module.exports = auth;
