import React from "react";
import CardData from "../CodingGallery/CardData";

function Detail(props) {
    return (
        <body>
            <div className="container">
                <div className="card-deck">
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <img className={props.image.default} alt={props.alt}></img>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">{props.title}</div>
                        <div classNem="card-body">
                            <p>{props.desc}</p>
                            <p>{props.urlApp}</p>
                            <p>{props.urlRepo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
};



export function ProjDetail() {
    return (
        <body>
            {CardData.map((item) => { 
                return (
                    <Detail
                        image={item.image}
                        alt={item.alt}
                        title={item.title}
                        desc={item.desc}
                        urlApp={item.urlApp}
                        urlRepo={item.urlRepo}
                    />)
            })}
        </body>
    )
};


export default Detail;