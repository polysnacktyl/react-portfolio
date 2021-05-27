import React from "react";
import { Link } from "react-router-dom";
import "../Gallery/gallery.css"

const Cards = props => (
<div className="content-container"> 
<div className="card-deck">
        {props.CardData.map(item => {
            return(
                
            <div key={item.id} className="card">
                <div className="card-header"><h4>{item.title}</h4></div>
                <div className="card-body">
                    {/* <Link to={"/work/" + item.id}> */}
                    <img className="img" src={item.image.default} alt={item.alt}></img>
                    {/* </Link> */}
                    <ul><a href={item.urlRepo} rel="noreferrer" target="_blank"><h5>see the code</h5></a><a href={item.urlApp} rel="noreferrer" target="_blank"><h5>launch the app</h5></a></ul>
                </div>
            </div>)
        })}
        </div>
    </div>
);

export default Cards;