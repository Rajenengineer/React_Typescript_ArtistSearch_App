import Tag from "../../../interfaces/tag";
import classes from "./Tag.module.css";

interface TagProps {
  tag: Tag
}

const TagItem = ({ tag }: TagProps) => {
  return (
    <span className={classes.root}>
      {tag.name}
    </span>
  );
}

export default TagItem;