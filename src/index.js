import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import Gallery from "./components/Projects/projectGallery.js";
import pdfDoc from "./components/Projects/index";

const routing = (
  <Router>
    <div>
      <Navbar />
    </div>
    <div>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="react-portfolio/home" component={Header} />
        <Route path="react-portfolio/work" component={Gallery} />
        <Route path="react-portfolio/resume" component={pdfDoc} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));


