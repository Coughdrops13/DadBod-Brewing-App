import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'; 
  
import { beerActions } from '../store/beer-slice';
import classes from './Beers.module.css';

const Beers = (props) => {
  const dispatch = useDispatch();
  const beerInventory = useSelector((state) => state.beers);

  console.log("BEFORE BEER INVENTORY", beerInventory);
  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch('/DadBod/beers')
      const jsonBeers = await response.json();

      dispatch(beerActions.getBeersList(jsonBeers));

    }

    fetchBeers();

    console.log("AFTER BEER INVENTORY", beerInventory);
  }, [dispatch])
};

export default Beers;