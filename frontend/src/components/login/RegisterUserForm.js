import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loggedInActions } from "../../store/loggedIn-slice";

const RegisterUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enteredUserName, setEnteredUserName] = useState('');
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

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const registerData = {
        email: enteredEmail,
        password: enteredPassword,
        passwordVerify: enteredVerification,
      };

      const response = await axios.post(
        "http://localhost:3000/DadBod/users/createUser",
        registerData,
        {
          withCredentials: true,
        }
      );

      console.log("RESPONSE", response);

      if (!response.statusText === "OK") {
        throw new Error("Error creating new user");
      }
    } catch (error) {
      console.log("REGISTRATION FORM ERROR", error);
    }

    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredVerification("");

    dispatch(loggedInActions.logIn());
    navigate("/");
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
          autoComplete="on"
        />
        <input
          type="password"
          placeholder="Password"
          value={enteredPassword}
          onChange={enteredPasswordChangeHandler}
          autoComplete="on"
        />
        <input
          type="password"
          placeholder="Verify Password"
          value={enteredVerification}
          onChange={enteredVerificationChangeHandler}
          autoComplete="on"
        />
        <button type="Submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default RegisterUserForm;
