import { Fragment, useState } from "react";
import { Link, Routes, Route, useNavigate, useMatch } from "react-router-dom";
import classes from "./SingleBeer.module.css";

import Card from "../UI/Card";
import CommentsList from "../comments/CommentsList";

const SingleBeer = (props) => {
  const { beer } = props;

  return (
    <Card>
      <figure className={classes.beer}>
        <div>
          <img
            src="http://localhost:3001/images/kittenImages/kittenImage.jpg"
            className={classes.img}
          />
          <p className={classes.title}>{beer.title}</p>
          <figcaption>
            <p>{beer.description}</p>
            <p>abv: {beer.abv}%</p>
          </figcaption>
          <p className={classes.disclaimer}>
            {beer.variety} brought to you by DadBod Brewing
          </p>
        </div>
      </figure>
    </Card>
  );
};

export default SingleBeer;
