import { Fragment } from "react";

const SingleWork = ({ work }) => {
  return (
    <Fragment>
      <h1 className="text-2xl font-bold">{work.company}</h1>
      <p>{work.role}</p>
      <p>{work.duration}</p>
      <p>{work.description}</p>
      <p>{work.techs}</p>
    </Fragment>
  );
};

export default SingleWork;
