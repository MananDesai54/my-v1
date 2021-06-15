import React from "react";
import classes from "./Link.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Link = ({ name, path, delay, click }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay,
        },
      }}
    >
      <NavLink
        onClick={click}
        exact
        to={path}
        className={[
          "hover:text-white transition-all duration-300 relative mx-4",
          classes.Link,
        ].join(" ")}
        activeClassName={classes.ActiveLink}
      >
        {name}
      </NavLink>
    </motion.div>
  );
};

export default Link;
