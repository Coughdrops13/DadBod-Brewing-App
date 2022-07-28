const jwt = require("jsonwebtoken");

const loginAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // check if logged in using token
    if (!token) {
      return res.json({isLoggedIn: false});
    }

    // check if unique token
    jwt.verify(token, process.env.JWT_SECRET);

    res.send({ isLoggedIn: true, token });
  } catch (error) {
    console.log("AUTHENTICATION ERROR", error);
    res.json(false).send();
  }
};

module.exports = loginAuth;