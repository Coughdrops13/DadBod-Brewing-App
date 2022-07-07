import { Fragment } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import Beers from './components/Beers';
import Layout from './Layout/Layout';

function App() {
  // const dispatch = useDispatch();



  return (
    <Fragment>
      <Layout>
        <Beers /> 
      </Layout>
    </Fragment>
  );
}

export default App;
