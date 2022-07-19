import { Link } from 'react-router-dom';

import Card from '../UI/Card';
import classes from './BeerListItem.module.css';
import cardClasses from '../UI/Card.module.css';

const BeerListItem = (props) => { 
  return (
    <Card className={cardClasses.beerListItem}>
      <li className={classes.item}>
        <img src='http://localhost:3001/images/kittenImages/kittenImage.jpg' className={classes.img} />
        <p>{props.title}</p>
        {/* <p>{props.variety} - {props.abv}% abv</p>
        <p>{props.description}</p> */}
        <div><Link to={`/beers/${props.id}`}>Details</Link></div>
      </li>
    </Card>
  )
};

export default BeerListItem;