import React from "react";
import "./style.css"
let image = require("../../assets/images/image.jpeg");

function Header() {
    return (
        <div className="header">
            <img src={image.default} alt="illustration"/>
        
       <p> hello portfolio 
     </p>
     </div>
    );
}

export default Header;