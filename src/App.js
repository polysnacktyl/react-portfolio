import React, { useReducer } from "react";
import "./index.css";
import { Redirect, Switch, Route, HashRouter as Router } from "react-router-dom";
import { Reducer, Context, initialState } from "./utils/Reducer";
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

import routes from './utils/Routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';

function App(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);




  return (
    <Store>
      <Context.Provider value={{ state, dispatch }}>
        <Router >
          <Navbar />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/home'><Home /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/work"><ChooseGallery /></Route>
            <Route exact path='/work/coding'><CodeGallery /></Route>
            <Route exact path="/work/coding/:projectID"><CodeProject /></Route>
            <Route exact path='/work/docs'><DocList /></Route>
            <Route exact path='/work/docs/:id'><DocContainer /></Route>
            <Route exact path="/work/design"><ShowIcons /></Route>
            <Route exact path="/resume"><Resume /></Route>

            <Redirect exact from='/' to='/blog/0' />

            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}


          </Switch>

          <Footer />


        </Router>
      </Context.Provider>
    </Store>
  )
};

export default App;