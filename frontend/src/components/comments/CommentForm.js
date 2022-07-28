import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../UI/Card";
import useHttp from "../../hooks/use-http";
import { createComment } from "../../lib/api";
import classes from "./CommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [enteredContent, setEnteredContent] = useState("");
  
  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };
  
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const enteredData = {
        content: enteredContent,
        beer_id: params.beerId, 
      }

      const response = await createComment(enteredData);

      if (!response.statusText === "OK") {
        throw new Error ("Error creating comment.")
      }

    } catch (error) {
      console.log("ERROR CREATING COMMENT: ", error);
    }

    navigate(`/beers/${params.beerId}/comments`);
   
  }


  return (
    <Card className={classes.modal}>
      <p>Tell us what you think of this beer!</p>
      <form onSubmit={submitHandler}>
        <label for='content' />
        <input
          type="text"
          value={enteredContent}
          onChange={contentChangeHandler}
          id='content'
        />
        <button type="Submit" className='btn'>Submit</button>
      </form>

    </Card>
  );
};

const CommentForm = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default CommentForm;
