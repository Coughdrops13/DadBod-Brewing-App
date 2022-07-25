import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  const { logIn, logOut } = loggedInActions;
  const {
    sendRequest,
    status,
    data: isLoggedIn,
    error,
  } = useHttp(getLoggedIn, true);

  // get token from server to check if user logged in
  useEffect(() => {
    // THIS WORKS BUT TRY USEHTTP HOOK
    // axios.get('http://localhost:3000/DadBod/users/loggedIn',).then((isLoggedIn) => {
    //   const isLoggedTHEFUCKIn = isLoggedIn;
    //   console.log("ISLOGGEDTHEFUCKIN INSIDE AXIOS PROMISE", isLoggedTHEFUCKIn);
    //   if (!isLoggedIn.data) {
    //     dispatch(logOut());
    //   }
    //   if (isLoggedIn.data) {
    //     dispatch(logIn());
    //   }

    // }).catch((error) => {
    //   console.log("THERE WAS AN ERROR:", error);
    // });

    sendRequest();
  }, [sendRequest]);
  
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(logIn());
    }
  }, [dispatch, isLoggedIn, logIn]);


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
            {!loggedInState && <div>HELLLLLOOOOOOOO</div>}
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

  if (status === "error") {
    return <div>SOMETHING WENT WRONG: {error}</div>;
  }
}

export default App;
