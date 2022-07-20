const auth = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("AUTHENTICATION ERROR", error);
    res
      .status(401)
      .json({ errorMessage: "Unauthorized" })
      .send();
  }
};

module.exports = auth;
