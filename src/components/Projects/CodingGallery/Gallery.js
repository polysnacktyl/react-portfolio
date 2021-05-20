import React from "react";
import "./gallery.css";



function Card(props) {
    return (

        <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
                <img className="img" src={props.image.default} alt={props.alt}></img>
                <h5>{props.title}</h5>
            </div>
        </div>
    )
};
export default Card;






