import React from "react";
import Card from "../CodingGallery/projectCard";
let babysittr = require("../../../images/babysittr.png")
let fungID = require("../../../images/fungID.png")
let profileGen = require("../../../images/profileGen.png")
let pwGen = require("../../../images/pwGen.png")
// let python = require("../../../images/python.png")
let neighborly = require("../../../images/neighborly.png")

const CardData = [
    {
        image: neighborly,
        alt: "screenshot",
        title: "Neighborly",
        desc: "it thing",
        urlApp: "https://infinite-forest-58133.herokuapp.com/",
        urlRepo: "https://github.com/polysnacktyl/project3/tree/amanda"
    },
    {
        image: fungID,
        alt: "screenshot",
        title: "fungID",
        desc: "a fun fungus-finder's guide",
        urlApp: "https://fung-i-d-ployed.herokuapp.com/mush-room",
        urlRepo: "https://github.com/polysnacktyl/fung-id-1"
    },
    {
        image: profileGen,
        alt: "screenshot",
        title: "node.js profile generator",
        urlApp: "return null",
        urlRepo: "https://github.com/polysnacktyl/team-profile-generator"
    },
    {
        image: pwGen,
        alt: "screenshot",
        title: "password generator",
        desc: "a javascript password generator",
        urlApp: "https://polysnacktyl.github.io/js-password-generator/",
        urlRepo: "https://github.com/polysnacktyl/js-password-generator"

    },
    {
        image: babysittr,
        alt: "screenshot",
        title: "babysittr",
        desc: "with the skills we had at the time, we built what we could of an idea for helping parents and sitters communicate the minutia of childcare",
        urlApp: "https://polysnacktyl.github.io/project-1/",
        urlRepo: "https://github.com/polysnacktyl/project-1/tree/amanda"

    }
]

function Projects() {
    return (
        <body>
            <div className="content-container">
                <div className="card-deck">
                    {CardData.map((item) => {
                        return (
                            <Card
                                image={item.image}
                                alt={item.alt}
                                title={item.title}
                                desc={item.desc}
                                urlApp={item.urlApp}
                                urlRepo={item.urlRepo}
                            />
                        );
                    })}
                </div>
            </div>
        </body>


    )
};

export default Projects;