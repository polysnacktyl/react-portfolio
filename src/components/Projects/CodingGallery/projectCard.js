import React from "react";
import "./gallery.css";

function Card(props) {
    return (

        <div className="card">
            <div className="card-header"><h4>{props.title}</h4></div>
            <div className="card-body">
                <img className="img" src={props.image.default} alt={props.alt}></img>
                <ul><a href={props.urlRepo} rel="noreferrer" target="_blank"><h5>see the code</h5></a><a href={props.urlApp} rel="noreferrer" target="_blank"><h5>launch the app</h5></a></ul>
                
            </div>
        </div>
    )
};
export default Card;