import React from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./components/Header/index";
import Projects from "./components/Projects/CodingGallery/Gallery";
import PDF from "./components/Projects/TechWriteGallery/viewPDF";
// import Doc from "./components/Projects/viewGuide";


function App() {
  return (
    <Router>
    <Navbar />

    <Switch>
      <Route exact path={["/", "/home"]}><Home /></Route>
      <Route path="/work"><Projects /></Route>
      <Route path="/docs"><PDF /></Route>
      <Route path="/resume" ><PDF /></Route>
    </Switch>

    <Footer />
   
</Router>

  );
}

export default App;


