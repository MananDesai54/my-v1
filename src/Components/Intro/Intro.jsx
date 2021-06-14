import { motion } from "framer-motion";
import React from "react";
import Layout from "../Layout/Layout";
import Title from "../Title/Title";

const Intro = () => {
  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <Layout>
      <Title title="About" number={1} />
      <motion.h1
        variants={variant}
        initial="initial"
        animate="animate"
        className="text-6xl font-semibold my-4"
      >
        Hello, I am Manan Desai 👋
      </motion.h1>
      <motion.h2
        variants={variant}
        initial="initial"
        animate="animate"
        className="text-4xl font-bold my-4"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Technology Enthusiast
      </motion.h2>
      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        className="my-4 text-xl text-gray-300 text-justify"
      >
        <p className="my-4">
          Hello world, I am Manan Desai. I am a computer programmer, more
          towards full stack web development. I am currently pursuing Computer
          Engineering Degree. I love creating beautiful web interfaces that can
          interact with backend and database. I started my programming journey
          with one of the most loved programming language C. After that I learnt
          JavaScript and after that I am doing all thing with JavaScript. I have
          worked with many JavaScript libraries and frameworks.
        </p>
        <p>
          Besides this I have also worked with Blockchain. Two things that
          attracts me a lot and I love exploring them are 3D and Databases. I
          love watching Talks about new technologies.
        </p>
      </motion.div>
    </Layout>
  );
};

export default Intro;
