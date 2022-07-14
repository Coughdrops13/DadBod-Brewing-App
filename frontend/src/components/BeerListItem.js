import classes from './BeerListItem.module.css';

const BeerListItem = (props) => { 
  return (
    <li>
        <p>{props.title}</p>
        <p>{props.variety} - {props.abv}% abv</p>
      <p>{props.description}</p>
      <img src='http://localhost:3001/images/kittenImages/kittenImage.jpg' className={classes.img} />
    </li>
  )
};

export default BeerListItem;