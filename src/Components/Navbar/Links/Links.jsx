import { motion } from "framer-motion";
import React from "react";
import Link from "../../Link/Link";

const Links = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex"
    >
      <Link name="About" path="/" delay="0" />
      <Link name="Work" path="/work" delay="0.1" />
      <Link name="Tech" path="/tech" delay="0.2" />
      <Link name="Projects" path="/project" delay="0.3" />
      <Link name="Education" path="/education" delay="0.4" />
      <Link name="Connect" path="/connect" delay="0.5" />
    </motion.div>
  );
};

export default Links;
