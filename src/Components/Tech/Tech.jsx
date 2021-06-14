import { Fragment } from "react";
import Tag from "../Tag/Tag";

const Tech = ({ tech }) => {
  return (
    <Fragment>
      <h1 className="text-2xl font-bold mt-4 mb-2">{tech.type}</h1>
      {tech.techs.map((item) => (
        <Tag text={item} key={item} />
      ))}
    </Fragment>
  );
};

export default Tech;
