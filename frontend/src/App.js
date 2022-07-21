import { Routes, Route } from "react-router-dom";
import axios from 'axios';

import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import BeerDetails from "./pages/BeerDetails";
import Layout from "./components/Layout/Layout";
import RegisterUserForm from "./components/login/RegisterUserForm";
import LoginForm from "./components/login/LoginForm";

// all server to send cookies to browser by default
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <main>
        <Layout>
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

export default App;
