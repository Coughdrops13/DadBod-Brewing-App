import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchSingleBeer } from '../store/beer-actions';
import useHttp from '../hooks/use-http';
import SingleBeer from "../components/beers/SingleBeer";

const BeerDetails = (props) => {
  const params = useParams();
  const beerId = params.beerId;

  const { sendRequest, status, data: loadedBeer, error } = useHttp(fetchSingleBeer, true);

  useEffect(() => {
    sendRequest(beerId);
  }, [sendRequest]);


  if (status === 'pending') {
    return <div>PENDING</div>
  }

  if (status === 'completed') {
    return (
      <SingleBeer beer={loadedBeer} />
    )
  }
  if (error) {
    return <div>{error}</div>
  }
};

export default BeerDetails;