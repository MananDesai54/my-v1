import classes from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import Work from "../Work/Work";

const Home = () => {
  return (
    <div
      className={[
        classes.Home,
        "h-screen w-screen text-white overflow-y-auto",
      ].join(" ")}
    >
      <Navbar />
      <Intro />
      <Work />
    </div>
  );
};

export default Home;
