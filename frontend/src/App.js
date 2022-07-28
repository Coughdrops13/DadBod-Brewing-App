import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwtDecoder from 'jwt-decode';

import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import BeerDetails from "./pages/BeerDetails";
import Layout from "./components/Layout/Layout";
import RegisterUserForm from "./components/login/RegisterUserForm";
import LoginForm from "./components/login/LoginForm";
import { getLoggedIn } from "./lib/api";
import useHttp from "./hooks/use-http";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { loggedInActions } from "./store/loggedIn-slice";
import { userActions } from "./store/user-slice";
import NotFound from "./pages/NotFound";

// all server to send cookies to browser by default
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const { logIn } = loggedInActions;
  const { setLoggedInUser } = userActions;
  const {
    sendRequest,
    status,
    data: getLoggedInResponse,
    error,
  } = useHttp(getLoggedIn, true);

  // get token from server to check if user logged in
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (getLoggedInResponse && getLoggedInResponse.isLoggedIn) {
      const token = getLoggedInResponse.token;
      const user = jwtDecoder(token).user;
      dispatch(logIn());
      dispatch(setLoggedInUser(user));
    }
  }, [dispatch, getLoggedInResponse, logIn, setLoggedInUser]);

  const loggedInState = useSelector((state) => state.loggedIn.isLoggedIn);
  console.log("loggedInState = ", loggedInState);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed") {
    return (
      <div>
        <main>
          <Layout>
            {!loggedInState && <div>NO ONE IS LOGGED IN RIGHT NOW</div>}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/beers" element={<AllBeers />} />
              <Route path="/beers/:beerId/*" element={<BeerDetails />} />
              <Route path="/createUser" element={<RegisterUserForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </main>
      </div>
    );
  }

  if (status === "error") {
    return <div>SOMETHING WENT WRONG: {error}</div>;
  }
}

export default App;
