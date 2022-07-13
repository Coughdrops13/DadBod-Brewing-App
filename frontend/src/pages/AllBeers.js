import { useSelector } from 'react-redux';

import BeersList from '../components/BeersList';


const AllBeers = (props) => {
  const beersList = useSelector(state => state.beers.inventory);

  console.log("FROM ALLBEERS BEERSLIST", beersList);
  return (
    <BeersList inventory={beersList} />
  );
};

export default AllBeers;
