import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchBeersData } from '../store/beer-actions';
import useHttp from '../hooks/use-http';
import { beerActions } from '../store/beer-slice';
import BeersList from "../components/beers/BeersList";
import Card from '../components/UI/Card';

const AllBeers = (props) => {
  const { setBeersList } = beerActions;
  const dispatch = useDispatch();

  const { sendRequest, status, data: loadedBeers, error } = useHttp(fetchBeersData, true);

  useEffect(() => {
    sendRequest();
    dispatch(setBeersList(loadedBeers));
  }, [sendRequest, dispatch, setBeersList]);
  
 
  if (status === 'pending') {
    return <div>PENDING</div>
  }
  if (status === 'completed') {
    return (
      <Card>
        <BeersList inventory={loadedBeers} />
      </Card>
    );

  }
  if (status === 'error') {
    return <div>IT DIDN'T WORK</div> 
  }
};

export default AllBeers;
