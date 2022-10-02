import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";

// import {
//   BrowserRouter as Router,
//   Routes as Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode !== "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleMode1 = () => {
    if (mode !== "green") {
      setMode("green");
      document.body.style.backgroundColor = "green";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="MyApp"
        about="Kuch To Karna pdega"
        mode={mode}
        toggleMode={toggleMode}
        toggleMode1={toggleMode1}
      />
      <div className="container">
        {/* <Switch> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route
              exact
              path="/"
              element={<TextForm heading="Form" mode={mode} />}
            />
          </Switch> */}
        <TextForm heading="Form" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
