import classes from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import Work from "../Work/Work";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const location = useLocation();

  return (
    <div className={[classes.Home, "h-screen w-screen text-white"].join(" ")}>
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Intro} />
          <Route path="/work" exact component={Work} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default Home;
