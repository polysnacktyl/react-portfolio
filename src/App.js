import React from "react";
import "./index.css";
import { Route, HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./components/Header/index";
import Gallery from "./components/Projects/Gallery/Gallery";
import DetailGallery from "./components/Projects/DetailGallery/DetailContainer";
import PDF from "./components/Projects/TechWriteGallery/viewPDF";
import Resume from "./components/Docs/Resume/Resume";


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path={"/"}><Home /></Route>
      <Route path={"/home"}><Home /></Route>
      <Route exact path="/work"><Gallery /></Route>
      <Route exact path="/work/:id"><DetailGallery /></Route>
      <Route path="/docs"><PDF /></Route>
      <Route path="/resume" ><Resume /></Route>
      <Footer />
    </Router>

  );
}

export default App;