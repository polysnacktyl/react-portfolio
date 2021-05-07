import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

function Navbar() {
  return (
    <div className="navbar">

      <NavLink exact activeClassName="active" to="/">
        home
      </NavLink>
      <NavLink activeClassName="active" to="/work">
        coding
      </NavLink>
      <NavLink activeClassName="active" to="/docs">
        tech writing
      </NavLink>
      <NavLink activeClassName="active" to="/docs">
        resumé
      </NavLink>
    
      <a href="https://github.com/polysnacktyl">
        github</a>


      <hr></hr>
    </div>

  );
}
export default Navbar;