import React from "react";
import "./index.css";
import { Route, HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./components/Header/index";
import Projects from "./components/Projects/CodingGallery/Gallery";
import PDF from "./components/Projects/TechWriteGallery/viewPDF";
import Resume from "./components/Docs/Resume/Resume";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path={"/"}><Home /></Route>
      <Route path={"/home"}><Home /></Route>
      <Route exact path="/work"><Projects /></Route>
      <Route path="/docs"><PDF /></Route>
      <Route path="/resume" ><Resume /></Route>
      <Footer />
    </Router>

  );
}

export default App;