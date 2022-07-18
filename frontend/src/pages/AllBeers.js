import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBeersData } from '../store/beer-actions';
import useHttp from '../hooks/use-http';
import { beerActions } from '../store/beer-slice';
import BeersList from "../components/BeersList";

const AllBeers = (props) => {
  const { setBeersList } = beerActions;
  const dispatch = useDispatch();

  const { sendRequest, status, data: loadedBeers, error } = useHttp(fetchBeersData, true);

  useEffect(() => {
    sendRequest();
    dispatch(setBeersList(loadedBeers));
  }, [sendRequest, dispatch, setBeersList, loadedBeers]);
  
  

  return (
    <BeersList  />
  );
};

export default AllBeers;
