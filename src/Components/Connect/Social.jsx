import { VscGithub, VscTwitter } from "react-icons/vsc";
import { FaInstagram, FaMedium, FaLinkedin } from "react-icons/fa";
import { Fragment } from "react";

const SocialMedia = () => {
  return (
    <Fragment>
      <div className="flex flex-col fixed bottom-0 left-10 items-center">
        <a href="https://github.com/MananDesai54">
          <VscGithub size={24} className="my-4" />
        </a>
        <a href="https://twitter.com/manandesai54">
          <VscTwitter size={24} className="my-4" />
        </a>
        <a href="https://www.linkedin.com/in/manandesai54/">
          <FaLinkedin size={24} className="my-4" />
        </a>
        <a href="https://instagram.com/manandesai54">
          <FaInstagram size={24} className="my-4" />
        </a>
        <a href="https://medium.com/@MananDesai54">
          <FaMedium size={24} className="my-4" />
        </a>
        <div
          className="h-28 bg-gray-400"
          style={{
            width: "0.5px",
          }}
        />
      </div>
    </Fragment>
  );
};

export default SocialMedia;
