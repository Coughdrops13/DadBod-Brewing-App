import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import BeerDetails from "./pages/BeerDetails";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <main>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/beers"
              element={<AllBeers />}
            />
            <Route path="/beers/:beerId" element={<BeerDetails />} />
          </Routes>
        </Layout>
      </main>
    </div>
  );
}

export default App;
