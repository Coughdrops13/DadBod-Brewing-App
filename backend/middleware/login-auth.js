const jwt = require("jsonwebtoken");

const loginAuth = async (req, res, next) => {
  console.log('LOGGIN_AUTH TRIGGERED');
  try {
    const token = req.cookies.token;

    // check if logged in using token
    if (!token) {
      return res.json(false);
    }

    // check if unique token
    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (error) {
    console.log("AUTHENTICATION ERROR", error);
    res.json(false).send();
  }
};

module.exports = loginAuth;