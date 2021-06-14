const Education = ({ edu }) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold">{edu.degree}</h1>
      <p className="text-lg text-gray-300">{edu.title}</p>
      <i className="text-gray-300 text-base">{edu.year}</i>
    </div>
  );
};

export default Education;
