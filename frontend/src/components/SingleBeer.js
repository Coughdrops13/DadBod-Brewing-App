const SingleBeer = (props) => {
  const { beer } = props;

  return (
    <div>
      <h1>{beer.title}</h1>
      <p>This {beer.variety} is brought to you by DadBod.</p>
      <p>{beer.description}</p>
      <p>Be careful this beverage contains... ALCOHOL! SHHHHHH {beer.abv}</p>
    </div>
  )
};

export default SingleBeer;