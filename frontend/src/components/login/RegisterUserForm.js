import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loggedInActions } from "../../store/loggedIn-slice";
import { userActions } from "../../store/user-slice";

const RegisterUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredVerification, setEnteredVerification] = useState("");

  const enteredUserNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

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
        userName: enteredUserName,
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

      // dispatch(loggedInActions.logIn());
      // dispatch(userActions.setLoggedInUser(registerData.email));

    } catch (error) {
      console.log("REGISTRATION FORM ERROR", error);
    }

    setEnteredUserName("");
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredVerification("");

    navigate("/");
  };

  return (
    <Fragment>
      <h1>Create an account</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Username"
          value={enteredUserName}
          onChange={enteredUserNameChangeHandler}
          autoComplete="on"
        />
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
