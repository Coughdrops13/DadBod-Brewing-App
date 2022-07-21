import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import BeerDetails from "./pages/BeerDetails";
import Layout from "./components/Layout/Layout";
import RegisterUserForm from "./components/login/RegisterUserForm";
import LoginForm from "./components/login/LoginForm";
import { getLoggedIn } from "./store/loggedIn-actions";
import useHttp from "./hooks/use-http";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { loggedInActions } from "./store/loggedIn-slice";

// all server to send cookies to browser by default
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const {
    sendRequest,
    status,
    data: isLoggedIn,
    error,
  } = useHttp(getLoggedIn, true);

  // get token from server to check if user logged in
  useEffect(() => {
    sendRequest();
    if (isLoggedIn) {
      dispatch(loggedInActions.logIn);
    } else {
      dispatch(loggedInActions.logOut);
    }
  }, [getLoggedIn, dispatch, loggedInActions]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }
  if (status === 'completed') {
    return (
      <div>
        <main>
          <Layout>
            {isLoggedIn && <div>HELLLLLOOOOOOOO</div>}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/beers" element={<AllBeers />} />
              <Route path="/beers/:beerId" element={<BeerDetails />} />
              <Route path="/createUser" element={<RegisterUserForm />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </Layout>
        </main>
      </div>
    );
  }

  if (status === 'error') {
    <div>FUCK</div>
  }
}

export default App;
