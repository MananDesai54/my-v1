const Footer = () => {
  return (
    <div className="flex justify-center items-center mb-4">
      <p className="mx-4 font-bold text-gray-400">
        © {new Date().getFullYear()}
      </p>
      <a
        className=" font-bold text-gray-400"
        href="http://github.com/MananDesai54"
      >
        Manan Desai
      </a>
    </div>
  );
};

export default Footer;
