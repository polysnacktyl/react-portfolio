import React from "react";
import "./index.css";
import { Route, HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/index";
import Resume from "./pages/Resume/Resume";
import ChooseGallery from './pages/Projects/projNav';
import CodeGallery from "./components/Projects/CodeGallery/CodeProjectGallery";
import CodeProject from './components/Projects/CodeGallery/CodeProject';
import Doc from './components/Projects/TechWriteGallery/Document';



function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path={"/"}><Home /></Route>
      <Route path={"/home"}><Home /></Route>
      <Route exact path="/work"><ChooseGallery /></Route>
      <Route exact path='/work/coding'><CodeGallery /></Route>
      <Route exact path="/work/coding/:projectID"><CodeProject /></Route>
      <Route exact path="/work/docs"><Doc /></Route>
      <Route exact path='/work/docs/:docID'><Doc /></Route>
      <Route path="/resume" ><Resume /></Route>
      <Footer />
    </Router>

  );
}

export default App;