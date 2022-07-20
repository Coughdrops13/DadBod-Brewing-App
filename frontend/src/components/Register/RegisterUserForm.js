import { Fragment, useState } from "react";

const RegisterUserForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredVerification, setEnteredVerification] = useState("");
  

  const enteredEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enteredPasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const enteredVerificationChangeHandler = (event) => {
    setEnteredVerification(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    try {
      const registerData = {
        email: enteredEmail,
        password: enteredPassword,
        verification: enteredVerification,
      }
    } catch (error) {
      console.log("REGISTRATION FORM ERROR", error);
    }
    if (enteredPassword !== enteredVerification) {
      
    }

    setEnteredEmail('');
    setEnteredPassword('');
    setEnteredVerification('');
  };

  return (
    <Fragment>
      <h1>Create an account</h1>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          value={enteredPassword}
          onChange={enteredPasswordChangeHandler}
        />
        <input
          type="password"
          placeholder="Verify Password"
          value={enteredVerification}
          onChange={enteredVerificationChangeHandler}
        />
        <button type="Submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default RegisterUserForm;
