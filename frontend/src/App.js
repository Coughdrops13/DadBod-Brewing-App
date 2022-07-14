import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllBeers from "./pages/AllBeers";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <main>
      <Layout>
        <Routes>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/beers'>
            <AllBeers />
          </Route>
        </Routes>
      </Layout>
      </main>
    </div>
  );
}

export default App;
