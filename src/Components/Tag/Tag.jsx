import classes from "./Tag.module.css";

const Tag = ({ text }) => {
  return <div className={classes.Tag}>{text}</div>;
};

export default Tag;
