import React, { useMemo } from "react";
import Layout from "../Layout/Layout";
import Title from "../Title/Title";
import SingleWork from "./SingleWork/SingleWork";
import { work as experience } from "./work";

const Work = () => {
  const works = useMemo(() => experience, []);
  return (
    <Layout className="mt-20 overflow-scroll">
      <Title title="Work Experience" number={2} />
      {works.map((work, index) => (
        <SingleWork work={work} key={index} />
      ))}
    </Layout>
  );
};

export default Work;
