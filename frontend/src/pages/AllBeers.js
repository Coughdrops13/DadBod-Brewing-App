import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchBeersData } from "../store/beer-actions";
import BeersList from "../components/BeersList";

const AllBeers = (props) => {
  // grab all beers in db and update redux store
  // then access store with useSelector
  const dispatch = useDispatch();
  const beersList = useSelector((state) => state.beers.inventory);

  useEffect(() => {
    dispatch(fetchBeersData());
  }, [dispatch]);

  return <BeersList inventory={beersList} />;
};

export default AllBeers;
