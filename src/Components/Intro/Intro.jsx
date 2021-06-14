import React from "react";
import Title from "../Title/Title";

const Intro = () => {
  return (
    <div
      className="m-4 w-2/3 mx-auto h-screen flex flex-col justify-center"
      id="about"
    >
      <Title title="About" number={0} />
      <h1 className="text-6xl font-semibold my-4">
        Hello, I am Manan Desai 👋
      </h1>
      <h2
        className="text-4xl font-bold my-4"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Technology Enthusiast
      </h2>
      <div className="my-4 w-10/12 text-xl text-gray-300 text-justify">
        <p className="my-4">
          Hello world, I am Manan Desai. I am a computer programmer, more
          towards full stack web development. I love creating beautiful web
          interfaces that can interact with backend and database. I started my
          programming journey with one of the most loved programming language C.
          After that I learnt JavaScript and after that I am doing all thing
          with JavaScript. I have worked with many JavaScript libraries and
          frameworks.
        </p>
        <p>
          Besides this I have also worked with Blockchain. Two things that
          attracts me a lot and I love exploring them are 3D and Databases. I
          love watching Talks about new technologies.
        </p>
      </div>
    </div>
  );
};

export default Intro;
