const ValidateEmail = (inputText) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};

module.exports = ValidateEmail;
