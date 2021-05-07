import React from "react";
import "./gallery.css";
let babysittr = require("../../../images/babysittr.png")
let fungID = require("../../../images/fungID.png")
let profileGen = require("../../../images/profileGen.png")
let pwGen = require("../../../images/pwGen.png")
let python = require("../../../images/python.png")

class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card-deck">
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                           <img className="img" src={python.default} alt="screenshot"></img>
                            <h5>python guide</h5>
                            <p>(coming soon)</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <a href="https://fung-i-d-ployed.herokuapp.com/" rel="noreferrer" target="blank"><img className="img" src={fungID.default} alt="screenshot"></img></a>
                            <h5>fung-ID</h5>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <a href="https://github.com/polysnacktyl/team-profile-generator" rel="noreferrer" target="_blank"><img className="img" src={profileGen.default} alt="screenshot"></img></a>
                            <h5>team profile generator</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <a href="https://polysnacktyl.github.io/project-1/" rel="noreferrer" target="_blank"><img className="img" src={babysittr.default} alt="screenshot"></img></a>
                                <h5>babysittr</h5>
                            </div>
                        </div>  <div className="card">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <a href="https://polysnacktyl.github.io/js-password-generator/" rel="noreferrer" target="_blank"><img className="img" src={pwGen.default} alt="screenshot"></img></a>
                                <h5>password generator</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default Projects;




//importAll(r) {
    //         return r.keys().map(r);
    //     }
    //     componentWillMount() {
    //         allImages = this.importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));
    //     }
    //     render() {
    //         return (
    //             // <li className="list-group-item">
    //                 <div className="container">
    //                     {/* <div className="row"> */}
    //                         {/* <div className="col"> */}
    //                             {
    //                                 allImages.map(
    //                                     (image, index) => <div><img src={image.default} key={index} alt="screenshot"></img><div><h3>title</h3><p>description</p></div></div>)

    //                             }
    //                         </div>





    //         )
    //     }
    // }

