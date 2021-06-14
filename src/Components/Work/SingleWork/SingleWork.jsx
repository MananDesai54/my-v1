import Tag from "../../Tag/Tag";

const SingleWork = ({ work }) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold">{work.company}</h1>
      <p className="text-lg text-gray-300">{work.role}</p>
      <i className="text-gray-300 text-base">{work.duration}</i>
      <p
        className="mt-1 text-base"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {work.description}
      </p>
      <div className="mt-1">
        {work.techs.map((tech) => (
          <Tag text={tech} key={tech} />
        ))}
      </div>
    </div>
  );
};

export default SingleWork;
