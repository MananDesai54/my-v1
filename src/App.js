import { motion } from "framer-motion";
import React from "react";
import "./App.css";
import Splash from "./Components/Splash/Splash";

function App() {
  return (
    <div className="App">
      <motion.div>
        <Splash />
      </motion.div>
    </div>
  );
}

export default App;
