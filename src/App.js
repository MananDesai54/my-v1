import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  const [postView, setPostView] = useState(false);

  useEffect(() => {
    const myVisitor = JSON.parse(localStorage.getItem("seen"));
    if (!myVisitor) {
      localStorage.setItem("seen", JSON.stringify(true));
    }
    fetch("http://localhost:5000/views", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({ unique: !myVisitor }),
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.log)
      .finally(() => setPostView(true));
  }, []);
  return (
    <div className="App">
      <Home postView={postView} />
    </div>
  );
}

export default App;
