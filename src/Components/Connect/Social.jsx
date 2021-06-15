import { VscGithub, VscTwitter } from "react-icons/vsc";
import { FaInstagram, FaMedium, FaLinkedin } from "react-icons/fa";
import BottomLine from "./BottomLine";
import SocialIcon from "./SocialIcon";

const SocialMedia = () => {
  return (
    <div className="flex flex-col fixed bottom-0 left-10 items-center">
      <SocialIcon url="https://github.com/MananDesai54" Icon={VscGithub} />
      <SocialIcon url="https://twitter.com/manandesai54" Icon={VscTwitter} />
      <SocialIcon
        url="https://www.linkedin.com/in/manandesai54/"
        Icon={FaLinkedin}
      />
      <SocialIcon url="https://instagram.com/manandesai54" Icon={FaInstagram} />
      <SocialIcon url="https://medium.com/@MananDesai54" Icon={FaMedium} />
      <BottomLine />
    </div>
  );
};

export default SocialMedia;
