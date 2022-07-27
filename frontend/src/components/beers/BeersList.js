import { Fragment } from "react";


import BeerListItem from "./BeerListItem";

const BeersList = (props) => {
  const beerInventory = props.inventory;

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
