import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../UI/Card";
import useHttp from "../../hooks/use-http";
import { createComment } from "../../lib/api";
import classes from "./CommentForm.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [enteredContent, setEnteredContent] = useState("");
  const { sendRequest, status, data, error } = useHttp(createComment)

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      content: enteredContent,
      beer_id: params.beerId,
    }
    sendRequest(enteredData);
    console.log("CREATE COMMENT DATA", data);

    navigate


  }
  return (
    <Card className={classes.modal}>
      <p>PlaceHolder</p>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={enteredContent}
          onChange={contentChangeHandler}
        />
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
