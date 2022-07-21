import { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>DadBod Brewing</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/beers"
              className={(navData) =>
                navData.isActive ? classes.active : undefined
              }
            >
              Beer List
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink
                to="/createUser"
                className={(navData) =>
                  navData.isActive ? classes.active : undefined
                }
              >
                Register
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
