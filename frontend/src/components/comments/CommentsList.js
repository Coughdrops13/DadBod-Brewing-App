import axios from "axios";

import CommentsListItem from "./CommentsListItem";
import useHttp from "../../hooks/use-http";
import { getComments } from "../../lib/api";
import classes from "./CommentsList.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import Unauthorized from "../../pages/Unauthorized";
import { useEffect } from "react";

const CommentsList = (props) => {
  const { beer_id, beer_title } = props;
  const {
    sendRequest,
    status,
    data: loadedComments,
    error,
  } = useHttp(getComments, true);

  useEffect(() => {
    sendRequest(beer_id);
  }, [sendRequest, beer_id]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed") {
    const commentsList = loadedComments.map((comment) => {
      return <CommentsListItem key={comment._id} content={comment.content} />;
    });

    const commentsListLabel = `Comments about DadBod's ${beer_title}`

    return (
      <>
        <h3 className='centered'>{commentsListLabel}</h3>
        <div className='centered'>
          <div> {commentsList}</div >
        </div>
      </>
    )
  }

  if (status === "error") {
    return (
      <>
        <p>LKSDJNGKBNJBKJNB</p>
        <Unauthorized />
      </>
    );
  }
};

export default CommentsList;
