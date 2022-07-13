const Beer = (props) => {
  const { beer } = props;
  return (
    <li>
      <div>
        <p>{beer.title}</p>
        <p>{beer.variety} - {beer.abv}% abv</p>
        <p>{beer.description}</p>
      </div>
    </li>
  )
};

export default Beer;