import { Link } from "react-router-dom";

import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={classes.pageNotFound}>
      <p>Page Not Found!</p>
      <Link to="/" className={classes['btn--flat']}>{`<< DadBod Home Page`}</Link>
    </div>
  );
};

export default PageNotFound;
