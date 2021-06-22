import React from "react";
import "./index.css";
import { Route, HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Footer from "./components/Footer/index";
import Resume from "./pages/Resume/Resume";
import ChooseGallery from './pages/Projects/projNav';
import CodeGallery from "./components/Projects/CodeGallery/CodeProjectGallery";
import CodeProject from './components/Projects/CodeGallery/CodeProject';

import ShowIcons from './pages/Icons/IconCollection';

import Documents from './components/Projects/TechWriteGallery/DocumentGallery';
import Doc from './components/Projects/TechWriteGallery/Document';

import ResPDF from './components/Projects/TechWriteGallery/Docs/01Resume';
import GrantProposal from './components/Projects/TechWriteGallery/Docs/02GrantProposal';
import RepairGuide from './components/Projects/TechWriteGallery/Docs/03RepairGuide';
import InformalReport from './components/Projects/TechWriteGallery/Docs/04InformalReport';
import InternshipRevised from './components/Projects/TechWriteGallery/Docs/05InternshipRevised';
import EditingProject from './components/Projects/TechWriteGallery/Docs/06EditingProject';
import PythonGuide from './components/Projects/TechWriteGallery/Docs/07PythonGuide';


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path={"/"}><Home /></Route>
      <Route path={"/home"}><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route exact path="/work"><ChooseGallery /></Route>
      <Route exact path='/work/coding'><CodeGallery /></Route>
      <Route exact path="/work/coding/:projectID"><CodeProject /></Route>
      <Route exact path="/work/docs"><Documents /></Route>
      <Route exact path="/work/design"><ShowIcons /></Route>
      <Route exact path="/work/docs/portfolio"><Doc /></Route>
      <Route exact path='/work/docs/1'><ResPDF /></Route>
      <Route exact path='/work/docs/2'><GrantProposal /></Route>
      <Route exact path='/work/docs/3'><RepairGuide /></Route>
      <Route exact path='/work/docs/4'><InformalReport /></Route>
      <Route exact path='/work/docs/5'><InternshipRevised /></Route>
      <Route exact path='/work/docs/6'><EditingProject /></Route>
      <Route exact path='/work/docs/7'><PythonGuide /></Route>
      <Route path="/resume" ><Resume /></Route>
      <Route exact path="/doc"><Doc /></Route>
      <Footer />
    </Router>

  );
}

export default App;