import { motion } from "framer-motion";
import React from "react";
import classes from "./Title.module.css";

const Title = ({ title, number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className={[
        "flex items-center relative mb-8 overflow-hidden",
        classes.Title,
      ].join(" ")}
      id="about"
    >
      <p className="text-xl mr-2">0{number}.</p>
      <h1 className="text-2xl font-bold">{title}</h1>
      <span
        className="ml-6 w-1/3 bg-gray-600 hidden md:block"
        style={{
          height: "0.5px",
        }}
      />
    </motion.div>
  );
};

export default Title;
