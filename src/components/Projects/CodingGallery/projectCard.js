import React from "react";
import "./gallery.css";


function Card(props) {
    return (

        <div className="card">
            <div className="card-header"><h5>{props.title}</h5></div>
            <div className="card-body">
                <img className="img" src={props.image.default} alt={props.alt}></img>
                <a href={props.urlRepo} rel="noreferrer" target="_blank"><h5>visit the repo</h5></a><a href={props.urlApp} rel="noreferrer" target="_blank"><h5>launch the app</h5></a>
                
            </div>
        </div>
    )
};
export default Card;




