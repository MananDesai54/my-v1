import { useMemo } from "react";
import Layout from "../Layout/Layout";
import Title from "../Title/Title";
import Education from "./Education";
import { eduDetails } from "./eduDetails";

const Educations = () => {
  const education = useMemo(() => eduDetails, []);
  return (
    <Layout
      className="justify-center w-1/2"
      style={{
        width: "50%",
      }}
    >
      <Title title="Education" number={5} />
      {education.map((edu, index) => (
        <Education edu={edu} key={index} />
      ))}
    </Layout>
  );
};

export default Educations;
