import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

function Header() {
  return (
      <div>
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      {/* <NavLink activeClassName="active" to="/users">
        Users
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink> */}
    </nav>
    </div>
  );
}
export default Header;