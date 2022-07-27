import classes from "./CommentsListItem.module.css";

import Card from "../UI/Card";

const CommentsListItem = (props) => {
  const { content } = props;
  return (
    <Card>
      <p>{content}</p>
    </Card>
  );
};

export default CommentsListItem;
