import axios from 'axios'

import CommentsListItem from "./CommentsListItem";
import useHttp from '../../hooks/use-http';
import { getComments } from "../../lib/api";
import classes from "./CommentsList.module.css";
import LoadingSpinner from '../UI/LoadingSpinner';
import Unauthorized from '../../pages/Unauthorized';

const CommentsList = (props) => {
  const {
    status,
    data: loadedComments,
    error,
  } = useHttp(getComments(props.beer_id), true);

  const commentsList = (
    <div>
      <p>List Here</p>
      <ul>
        <li>
          Comment 1
        </li>
        <li>
          Comment 2
        </li>
        <li>
          Comment 3
        </li>
      </ul>
    </div>
  );
  
  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (status === 'completed') {
    return <div className="centered">
      {commentsList}
      <CommentsListItem />
    </div>;
  }

  if (status === 'error') {
    return (
      <>
        <p>LKSDJNGKBNJBKJNB</p>
        <Unauthorized />
      </>
    )
  }
};

export default CommentsList;
