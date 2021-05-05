import React from "react";
import "./style.css"
let image = require("../../assets/images/image.jpeg");

function Header() {
    return (
        <div className="header">
            <img src={image.default} alt="illustration"/>
        
       <p> Please enjoy this fine sampling of works from my journey through U. Penn's full-stack coding boot camp alongside some of my favorite technical writing projects. 
     </p>
     </div>
    );
}

export default Header;