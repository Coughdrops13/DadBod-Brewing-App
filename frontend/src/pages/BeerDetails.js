import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SingleBeer from "../components/SingleBeer";

const BeerDetails = (props) => {
  const params = useParams;
  const beerId = params.beerId;
  const beer = useSelector((state) => state.inventory[beerId])

  return (
    <SingleBeer beer={beer} />
  )
};

export default BeerDetails;