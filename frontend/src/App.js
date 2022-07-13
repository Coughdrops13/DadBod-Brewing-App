import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import AllBeers from "./pages/AllBeers";
import Layout from "./Layout/Layout";
import { fetchBeerData } from './store/beer-actions';

function App() {
  const dispatch = useDispatch();
  const beersList = useSelector(state => state.beers.inventory);

  useEffect(() => {
    dispatch(fetchBeerData());
  }, [dispatch])

  console.log('BEERSLIST FROM APP.JS', beersList);

  return (
    <Fragment>
      <Layout>
        <AllBeers inventory={beersList} />
      </Layout>
    </Fragment>
  );
}

export default App;
