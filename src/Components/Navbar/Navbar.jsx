import classes from "./Navbar.module.css";
import Links from "./Links/Links";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { motion } from "framer-motion";
import Resume from "../Resume/Resume";
import SocialMedia from "../Connect/Social";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={[
        classes.Navbar,
        "p-4 border-gray-700 shadow-lg fixed w-screen flex md:justify-center items-center text-xl z-50",
      ].join(" ")}
    >
      <div className="hidden md:block">
        <Links delay={0} click={() => {}} />
      </div>
      <div className="md:hidden flex justify-between items-center w-full">
        <Logo />
        <div className="flex items-center">
          <Resume />
          <FaBars className="ml-4" onClick={() => setShow(true)} size="24" />
        </div>
        <motion.div
          className="fixed h-full w-full top-0 left-0 transition-all duration-300"
          style={{
            background: "var(--background-secondary)",
            opacity: show ? 1 : 0,
            zIndex: show ? 1000 : -1,
            pointerEvents: show ? "all" : "none",
          }}
        >
          <FaTimes
            size="24"
            className="absolute top-4 right-4"
            onClick={() => setShow(false)}
          />
          <Links
            className="flex-col justify-evenly items-center h-full"
            click={() => setShow(false)}
            delay={1}
          />
          <SocialMedia mobile />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
