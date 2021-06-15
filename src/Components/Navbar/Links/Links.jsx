import { motion } from "framer-motion";
import React from "react";
import Link from "../../Link/Link";

const Links = ({ className, click, delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className={["flex", className].join(" ")}
    >
      <Link name="About" path="/" delay={delay} click={click} />
      <Link
        name="Experience"
        path="/experience"
        delay={delay + 0.1}
        click={click}
      />
      <Link name="Technology" path="/tech" delay={delay + 0.2} click={click} />
      <Link name="Projects" path="/project" delay={delay + 0.3} click={click} />
      <Link
        name="Education"
        path="/education"
        delay={delay + 0.4}
        click={click}
      />
    </motion.div>
  );
};

export default Links;
