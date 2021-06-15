import { useMemo } from "react";
import Layout from "../Layout/Layout";
import Title from "../Title/Title";
import Education from "./Education";
import { eduDetails } from "./eduDetails";
import classes from "./Educations.module.css";

const Educations = () => {
  const education = useMemo(() => eduDetails, []);
  return (
    <Layout
      className={[
        "justify-center my-10 md:my-0 w-10/12 md:w-1/2",
        classes.Edu,
      ].join(" ")}
    >
      <Title title="Education" number={5} />
      {education.map((edu, index) => (
        <Education edu={edu} key={index} />
      ))}
    </Layout>
  );
};

export default Educations;
