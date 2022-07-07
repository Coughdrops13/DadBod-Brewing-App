import { Fragment } from 'react';

import Beers from './components/Beers';
import Layout from './Layout/Layout';

function App() {
  return (
    <Fragment>
      <Layout>
        <Beers /> 
      </Layout>
    </Fragment>
  );
}

export default App;
