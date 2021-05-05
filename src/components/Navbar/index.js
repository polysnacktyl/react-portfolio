import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

function Navbar() {
  return (
      <div className="navbar">
    
      <NavLink exact activeClassName="active" to="/">
        home
      </NavLink>
      <NavLink activeClassName="active" to="work">
        work
      </NavLink>
      <NavLink activeClassName="active" to="gh">
       github
      </NavLink>
      <NavLink activeClassName="active" to="linked">
       linkedIn
      </NavLink>
 
    <hr></hr>
    </div>
    
  );
}
export default Navbar;