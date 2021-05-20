import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

function Footer() {
    return (
        <div className="navbar"> 
  <footer >
    <p>
      <ul>
      <li><i class="fas fa-phone-square"> (657) 859-1763</i></li>
      <i class="fas fa-envelope"> hamilton.technically@gmail.com</i>
      </ul>
    </p>
  </footer>
        </div>
    );
}

export default Footer;