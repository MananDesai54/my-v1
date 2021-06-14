import Tag from "../Tag/Tag";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";

const Project = ({ project }) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p
        className="mt-1 text-base"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {project.description}
      </p>
      <div className="mt-1">
        {project.techs.map((tech) => (
          <Tag text={tech} key={tech} />
        ))}
      </div>
      <div className="flex">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <VscGithub size={24} />
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer">
            <VscLinkExternal size={24} className="mx-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
