import Beer from "./Beer";

const BeersList = (props) => {
  const inventory = props.inventory.map(beer => {
    return (
      <Beer key={beer.id} beer={beer} />
    )
  })

  return (
    <div>
      <ul>
        {inventory}
      </ul>
    </div>
  )
};

export default BeersList;