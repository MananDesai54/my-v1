import { VscGithub, VscTwitter, VscMail } from "react-icons/vsc";
import { FaInstagram, FaMedium, FaLinkedin } from "react-icons/fa";
import BottomLine from "./BottomLine";
import SocialIcon from "./SocialIcon";

const SocialMedia = ({ mobile }) => {
  return (
    <div
      className={[
        "flex fixed bottom-0",
        mobile
          ? "flex-row justify-around w-full"
          : "flex-col items-center left-10",
      ].join(" ")}
    >
      <SocialIcon url="https://github.com/MananDesai54" Icon={VscGithub} />
      <SocialIcon url="https://twitter.com/manandesai54" Icon={VscTwitter} />
      <SocialIcon
        url="https://www.linkedin.com/in/manandesai54/"
        Icon={FaLinkedin}
      />
      <SocialIcon url="https://instagram.com/manandesai54" Icon={FaInstagram} />
      <SocialIcon url="https://medium.com/@MananDesai54" Icon={FaMedium} />
      {mobile && (
        <SocialIcon url="mailto:manan5401desai@gmail.com" Icon={VscMail} />
      )}
      {!mobile && <BottomLine />}
    </div>
  );
};

export default SocialMedia;
