// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Header from './components/Header/index'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
   
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
// import Users from "./users";
// import Contact from "./contact";
// import Notfound from "./notfound";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

const routing = (
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
      </Switch>
      <hr />
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));


