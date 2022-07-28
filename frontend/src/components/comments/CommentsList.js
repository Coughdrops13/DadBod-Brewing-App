import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import CommentsListItem from "./CommentsListItem";
import useHttp from "../../hooks/use-http";
import { getComments } from "../../lib/api";
import classes from "./CommentsList.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import Unauthorized from "../../pages/Unauthorized";
import { beerActions } from "../../store/beer-slice";

const CommentsList = (props) => {
  const dispatch = useDispatch();
  const { beer_id, beer_title } = props;
  const { setBeersComments } = beerActions;
  const {
    sendRequest,
    status,
    data: loadedComments,
    error,
  } = useHttp(getComments, true);
  
  useEffect(() => {
    sendRequest(beer_id);
    dispatch(setBeersComments(loadedComments));
  }, [sendRequest, beer_id]);

  useEffect(() => {
    dispatch(setBeersComments(loadedComments));
  }, [dispatch, setBeersComments, loadedComments]);
  
  const specificLoadedComments = useSelector(state => state.beers.comments)
  console.log("SPECIFICLOADEDCOMMENTS", specificLoadedComments)

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && specificLoadedComments) {
    const commentsList = specificLoadedComments.map((comment) => {
      return <CommentsListItem key={comment._id} author={comment.author} content={comment.content} />;
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
