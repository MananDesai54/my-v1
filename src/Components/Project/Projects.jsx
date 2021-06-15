import { projects } from "./projectsDetails";
import { useMemo } from "react";
import ListRenderer from "../ListRender/ListRenderer";

const Projects = () => {
  const myProjects = useMemo(() => projects, []);
  return <ListRenderer list={myProjects} title="Projects" number="4" />;
};

export default Projects;
