import { Fragment } from "react";
import { useSelector } from "react-redux";


import BeerListItem from "./BeerListItem";

const BeersList = (props) => {
  const beerInventory = useSelector((state) => state.beers.inventory);
  console.log('BEER INVENTORY FROM BEERSLIST COMPONENT', beerInventory);


  return (
    <Fragment>
      {beerInventory.map((beer) => (
        <BeerListItem
          key={beer._id}
          id={beer._id}
          title={beer.title}
          variety={beer.variety}
          abv={beer.abv}
          description={beer.description}
        />
      ))}
    </Fragment>
  );
};

export default BeersList;
