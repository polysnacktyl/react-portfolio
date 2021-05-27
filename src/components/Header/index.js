import React from "react";
import "./style.css"
let image = require("../../assets/images/image.jpeg");

class Home extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div className="intro">
                    <h3>Amanda Hamilton</h3>
                    <p>web development & technical writing</p>
                    <img className="hello" src={image.default} alt="illustration" />


                </div>

            </div>
        );
    }

}

export default Home;