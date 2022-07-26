import { Routes, Route } from 'react-router-dom';

import CommentsListItem from "./CommentsListItem";
import CommentForm from "../comments/CommentForm";
import classes from "./CommentsList.module.css";

const CommentsList = () => {
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
  
  return <div className="centered">
    {commentsList}
    <CommentsListItem />
  </div>;
};

export default CommentsList;
