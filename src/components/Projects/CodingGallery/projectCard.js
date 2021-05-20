import { PromiseProvider } from "mongoose";
import React from "react";
import "./gallery.css";


function Card(props) {
    return (

        <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
                <a href={props.urlRepo} rel="noreferrer" target="_blank">
                <img className="img" src={props.image.default} alt={props.alt}></img></a>
                <h5>{props.title}</h5>
            </div>
        </div>
    )
};
export default Card;




