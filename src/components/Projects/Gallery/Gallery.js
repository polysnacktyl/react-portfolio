import React, { Component } from "react";
import "./gallery.css";
import Cards from "../../Projects/Cards/Cards";
let babysittr = require("../../../images/babysittr.png")
let fungID = require("../../../images/fungID.png")
let profileGen = require("../../../images/profileGen.png")
let pwGen = require("../../../images/pwGen.png")
let neighborly = require("../../../images/neighborly.png")

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            CardData: [
                {
                    id: 1,
                    image: neighborly,
                    alt: "screenshot",
                    title: "Neighborly",
                    desc: "it thing",
                    urlApp: "https://infinite-forest-58133.herokuapp.com/",
                    urlRepo: "https://github.com/polysnacktyl/project3/tree/amanda"
                },
                {
                    id: 2,
                    image: fungID,
                    alt: "screenshot",
                    title: "fungID",
                    desc: "a fun fungus-finder's guide",
                    urlApp: "https://fung-i-d-ployed.herokuapp.com/mush-room",
                    urlRepo: "https://github.com/polysnacktyl/fung-id-1"
                },
                {
                    id: 3,
                    image: profileGen,
                    alt: "screenshot",
                    title: "HTML Generator",
                    urlApp: null,
                    urlRepo: "https://github.com/polysnacktyl/team-profile-generator"
                },
                {
                    id: 4,
                    image: pwGen,
                    alt: "screenshot",
                    title: "Password Generator",
                    desc: "a javascript password generator",
                    urlApp: "https://polysnacktyl.github.io/js-password-generator/",
                    urlRepo: "https://github.com/polysnacktyl/js-password-generator"

                },
                {
                    id: 5,
                    image: babysittr,
                    alt: "screenshot",
                    title: "babysittr",
                    desc: "with the skills we had at the time, we built what we could of an idea for helping parents and sitters communicate the minutia of childcare",
                    urlApp: "https://polysnacktyl.github.io/project-1/",
                    urlRepo: "https://github.com/polysnacktyl/project-1/tree/amanda",
                    description: "",
                    tools: "",
                    challenges: ""
                }
            ]
        };
    }

    render() {
        return (
     
                    <Cards CardData={this.state.CardData} />
             
        )
    }
}

export default Gallery;