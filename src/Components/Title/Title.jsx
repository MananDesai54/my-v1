import React from "react";
import classes from "./Title.module.css";

const Title = ({ title, number }) => {
  return (
    <div
      className={["flex items-center relative mb-8", classes.Title].join(" ")}
      id="about"
    >
      <p className="text-xl mr-2">0{number}.</p>
      <h1 className="text-2xl">{title}</h1>
      <span
        className="ml-6 w-1/3 bg-gray-600"
        style={{
          height: "0.5px",
        }}
      ></span>
    </div>
  );
};

export default Title;
