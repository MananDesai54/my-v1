import React from "react";
import classes from "./Link.module.css";

const Link = ({ name, path }) => {
  return (
    <a
      href={path}
      className={[
        "hover:text-white transition-all duration-300 relative mx-4",
        classes.Link,
      ].join(" ")}
    >
      {name}
    </a>
  );
};

export default Link;
