const emptyFields = (fields) => {
  let emptyFieldsArray = [];
  for (let field of fields) {
    if (!field) {
      emptyFieldsArray.push(field.toString());
    }
  }
}

module.exports = emptyFields;