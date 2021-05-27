import React from "react";
import "./resume.css";

class Resume extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div className="page">

                    <h1>AMANDA HAMILTON</h1>
                        <div id="contactMe"><ul><li>(657) 859-1763</li> <li>the.a.hamilton@gmail.com</li> <li>Pittsburgh, PA</li></ul></div>
                        
                    <hr></hr>

                    <h2>JR. MERN STACK DEVELOPER</h2>
                    <hr></hr>

                    <p>Junior full stack web developer and technical writer with a penchant for creative problem-solving and efficiency. Seeking to collaborate with diverse teams on pro-social projects to building my skills, expanding my perspective, and adding value.</p>

                    <h2>TECHNICAL SKILLS</h2>
                    <hr></hr>
                    <li><b>Languages</b></li> <p>JavaScript, NodeJS, SQL, NoSQL, HTML, CSS</p>
                    <li><b>Tools</b></li> <p>Express, MongoDB, Mongoose, APIs, Bootstrap, React</p>
                    <li><b>Applications</b></li> <p>GitHub, Heroku </p>
                    <li><b>Technical Writing</b></li> <p>manuals, reports, science and technology, technical editing</p>

                    <h2>PROJECTS</h2>
                    <hr></hr>

                    <li><b>Neighborly</b></li>
                    <p>summary: a community hub to facilitate and improve communication and connection for my city's mutual aid effort</p>
                    <p>role: concept, user authentication through auth0, MVC content, API routes</p>
                    <p>tools: mongodb, express, javascript, node, react, auth0, bootstrap, Heroku,</p>

                    <li><b>FungID</b></li>
                    <p>summary: an application for storing photos and gps location of foraging finds and keeping track of prime spots.</p>
                    <p>role: concept, cloudinary image functionality</p>
                    <p>tools: javascript, cloudinary, express, node, handlebars, heroku</p>

                    <li><b>HTML Generator</b></li>

                    <p>summary: a nodejs content management system for maintaining a database of employee information</p>
                    <p>role: author/solo project</p>
                    <p>tools: nodejs, inquirer npm, javascript, SQL and MySQL Workbench</p>

                    <h2>EXPERIENCE</h2>
                    <hr></hr>

                    <li><b>Internship, Brookhurst Jr. High AUHSD (05/20)</b></li>
                    <p>Technical Writing, Editing, Revision</p>
                    <li><b>Massage Therapy (2015 - 2020)</b></li>
                    <p>self-employed</p>

                    <h2>EDUCATION</h2>
                    <hr></hr>

                    <li><b>University of Pennsylvania, LPS - Coding Boot Camp (05/21)</b></li>
                    <p>Certificate, Full Stack Development</p>


                    <li><b>California State University, Long Beach(05/20)</b></li>
                    <p>Bachelor of Arts, English, Creative Writing</p>
                    <p>Certificate, Technical and Professional Writing</p>
                    <li><b>Long Beach City College (05/17)</b></li>
                    <p>Associate of Arts, English</p>
                    <p>Jacaranda Essay Contest, Expository Category Winner (05/17)</p>

                    <li><b>Career Networks Institute (12/09)</b></li>
                    <p>Certificate, Massage Therapy and Bodywork</p>
                </div>
                <div id="dlPDF">
                <a href="https://drive.google.com/uc?export=download&id=1J87vNLxhQFAywZKlNeBxkl-h9KHhxOsd" download><i class="fas fa-save"> </i> download pdf <i class="fas fa-save"> </i></a>
                </div>

            </div>
        )
    }
};

export default Resume;