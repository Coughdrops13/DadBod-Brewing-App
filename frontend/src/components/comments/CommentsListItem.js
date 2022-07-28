import classes from "./CommentsListItem.module.css";

import Card from "../UI/Card";

const CommentsListItem = (props) => {
  const { author, content } = props;
  return (
    <Card>
      <p>{content}<br /> -{author}</p>

    </Card>
  );
};

export default CommentsListItem;
