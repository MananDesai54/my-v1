import { projects } from "./projectsDetails";
import { useMemo } from "react";
import Layout from "../Layout/Layout";
import Title from "../Title/Title";
import Project from "./Project";

const Projects = () => {
  const myProjects = useMemo(() => projects, []);

  return (
    <Layout className="mt-24 mb-10">
      <Title title="Projects" number="4" />
      {myProjects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </Layout>
  );
};

export default Projects;
