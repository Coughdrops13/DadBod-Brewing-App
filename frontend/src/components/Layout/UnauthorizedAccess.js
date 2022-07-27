import { Link } from "react-router-dom";

import classes from "./UnauthorizedAccess.module.css";

const UnauthorizedAccess = () => {
  return (
    <div className={classes.unauthorizedAccess}>
      <p>Must be logged in to visit this page!</p>
      <Link to="/" className={classes['btn--flat']}>{`<< DadBod Home Page`}</Link>
    </div>
  );
};

export default UnauthorizedAccess;