import { Link } from 'react-router-dom';

import classes from './BeerListItem.module.css';

const BeerListItem = (props) => { 
  return (
    <li>
      <img src='http://localhost:3001/images/kittenImages/kittenImage.jpg' className={classes.img} />
      <p>{props.title}</p>
      <p>{props.variety} - {props.abv}% abv</p>
      <p>{props.description}</p>
      <div><Link to={`/`}></Link></div>
    </li>
  )
};

export default BeerListItem;