import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchSingleBeer } from '../store/beer-actions';

import SingleBeer from "../components/SingleBeer";

const BeerDetails = (props) => {
  const dispatch = useDispatch;
  const params = useParams();
  const beerId = params.beerId;

  useEffect(() => {
    dispatch(fetchSingleBeer(beerId))
  }, [dispatch, fetchSingleBeer]);

  const beer = useSelector

  return (
    <SingleBeer beer={beer} />
  )
};

export default BeerDetails;