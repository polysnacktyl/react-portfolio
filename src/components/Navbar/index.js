import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">

      <NavLink exact activeClassName="active" to="/">
        home
      </NavLink>
      <NavLink activeClassName="active" to="/work">
        work
      </NavLink>
      <NavLink activeClassName="active" to="/resume">
        resumé
      </NavLink>
      <a href="https://github.com/polysnacktyl" rel="noreferrer" target="_blank">
        github</a>
        <a href='https://www.linkedin.com/in/polysnacktyl' rel="noreferrer" target="_blank">linkedIn</a>
        </div>
      <hr></hr>
    </div>

  );
}
export default Navbar;