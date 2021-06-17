import React from "react";
import { Link } from "react-router-dom";
import "./gallery.css"

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
                   
                </div>
            </div>)
        })}
        </div>
    </div>
);

export default Cards;