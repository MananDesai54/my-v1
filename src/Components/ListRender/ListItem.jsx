import Tag from "../Tag/Tag";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";

const ListItem = ({ item }) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold">{item.title}</h1>
      {item.role && <p className="text-lg text-gray-300">{item.role}</p>}
      {item.duration && (
        <i className="text-gray-300 text-base">{item.duration}</i>
      )}
      {item.description && (
        <p
          className="mt-1 text-base"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          {item.description}
        </p>
      )}
      {item.techs && (
        <div className="mt-1">
          {item.techs.map((tech) => (
            <Tag text={tech} key={tech} />
          ))}
        </div>
      )}
      <div className="flex">
        {item.github && (
          <a href={item.github} target="_blank" rel="noreferrer">
            <VscGithub size={24} />
          </a>
        )}
        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer">
            <VscLinkExternal size={24} className="mx-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ListItem;
