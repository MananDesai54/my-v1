import classes from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import Work from "../Work/Work";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "../Footer/Footer";
import Techs from "../Tech/Techs";
import Projects from "../Project/Projects";
import Educations from "../Education/Educations";
import SocialMedia from "../Connect/Social";
import Mail from "../Connect/Mail";

const Home = (props) => {
  const location = useLocation();

  return (
    <div className={[classes.Home, "h-screen w-screen text-white"].join(" ")}>
      <Navbar postView={props.postView} />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Intro} />
          <Route path="/experience" exact component={Work} />
          <Route path="/tech" exact component={Techs} />
          <Route path="/project" exact component={Projects} />
          <Route path="/education" exact component={Educations} />
        </Switch>
      </AnimatePresence>
      <div className=" md:block hidden">
        <SocialMedia />
        <Mail />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
