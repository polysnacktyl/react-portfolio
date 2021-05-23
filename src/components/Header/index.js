import React from "react";
import "./style.css"
let image = require("../../assets/images/image.jpeg");

class Home extends React.Component {
    render() {
        return (
            <div className="content-container">
                    <img className="hello" src={image.default} alt="illustration" />
                    <p className="howdy"> hello portfolio</p>
                </div>
           

        );
    }

}

export default Home;