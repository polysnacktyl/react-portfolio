import React from "react";
import "./index.css";
import { Route, HashRouter as Router } from "react-router-dom";
import Store from './utils/Store';
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Footer from "./components/Footer/index";
import Resume from "./pages/Resume/Resume";
import ChooseGallery from './pages/Projects/projNav';
import CodeGallery from "./components/Projects/CodeGallery/CodeProjectGallery";
import CodeProject from './components/Projects/CodeGallery/CodeProject';
import DocList from './components/Projects/TechWriteGallery/DocList';
import DocContainer from './components/Projects/TechWriteGallery/DocContainer';
import ShowIcons from './pages/Icons/IconCollection';

function App() {
  return (
    <Store>
      <Router>
        <Navbar />
        <Route exact path={"/"}><Home /></Route>
        <Route path={"/home"}><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route exact path="/work"><ChooseGallery /></Route>
        <Route exact path='/work/coding'><CodeGallery /></Route>
        <Route exact path="/work/coding/:projectID"><CodeProject /></Route>
        <Route exact path='/work/docs'><DocList /></Route>
        <Route exact path='/work/docs/:id'><DocContainer /></Route>
        <Route exact path="/work/design"><ShowIcons /></Route>
        <Route exact path="/resume"><Resume /></Route>
        <Footer />
      </Router>
    </Store>
  )
};

export default App;