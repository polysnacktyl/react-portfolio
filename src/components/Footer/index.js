import React from "react";
import "./style.css"

function Footer() {
  return (
    <footer >
      <div className="footer--pin">
        <hr></hr>
        <p>
          <ul>
            <li><i class="fas fa-phone-square"></i> (657) 859-1763 </li> 
            <li><a href="mailto: the.a.hamilton@gmail.com" target="_blank" rel="noopener noreferrer"> <i class="fas fa-envelope"></i> the.a.hamilton@gmail.com</a></li>
          </ul>
        </p>
      </div>
    </footer>
  );
}

export default Footer;