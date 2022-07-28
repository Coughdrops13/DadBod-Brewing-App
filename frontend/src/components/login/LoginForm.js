import { Fragment, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { loggedInActions } from "../../store/loggedIn-slice";


const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState(null);
  

  const enteredEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enteredPasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const registerData = {
        email: enteredEmail,
        password: enteredPassword,
      }

      const response = await axios.post("http://localhost:3000/DadBod/users/login", registerData);
      console.log("RESPONSE", response);

      if (!response.statusText === 'OK') {
        throw new Error("Error logging in user");
      }

      
    } catch (error) {
      
      console.log("LOGIN FORM ERROR", error);
      setError(error);
      return;
    }
    
    setEnteredEmail('');
    setEnteredPassword('');   

    dispatch(loggedInActions.logIn());
    navigate('/');

  };

  return (
    <Fragment>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          autoComplete='on'
        />
        <input
          type="password"
          placeholder="Password"
          value={enteredPassword}
          onChange={enteredPasswordChangeHandler}
          autoComplete='on'
        />
        <button type="Submit" className='btn'>Submit</button>
      </form>
      {error && <p>{error.response.data.errorMessage}</p>}
    </Fragment>
  );
};

export default LoginForm;
