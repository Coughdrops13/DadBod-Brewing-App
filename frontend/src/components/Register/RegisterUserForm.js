import { Fragment } from 'react';

const RegisterUserForm = () => {
  return (
    <Fragment>
      <h1>Create an account</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Verify Password" />
        <button type="Submit">Submit</button>
      </form>
    </Fragment>
  )
};

export default RegisterUserForm;