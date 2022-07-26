import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from 'axios';

import classes from "./MainHeader.module.css";
import { loggedInActions } from "../../store/loggedIn-slice";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loggedIn.isLoggedIn);

  const logoutHandler = async () => {
    await axios.get("http://localhost:3000/DadBod/users/logout")
    
    dispatch(loggedInActions.logOut());

  };

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
          {isLoggedIn && (
            <li>
              <NavLink
                to="/"
                onClick={logoutHandler}
              >
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
