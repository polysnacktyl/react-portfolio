import React from "react";
import "./resume.css";

class Resume extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div className="page">

                    <h1>AMANDA HAMILTON</h1>
                        <ul><li>(657) 859-1763</li> <li>the.a.hamilton@gmail.com</li> <li>Pittsburgh, PA</li></ul>
                        
                    <hr></hr>

                    <h2>JR. MERN STACK DEVELOPER</h2>
                    <hr></hr>

                    <p>Junior full stack web developer and technical writer with a penchant for creative problem-solving and efficiency. Seeking to collaborate with diverse teams on pro-social projects to build my skills, expand my perspective, and add value.</p>

                    <h2>TECHNICAL SKILLS</h2>
                    <hr></hr>
                    <li><b>Languages</b></li> <p>JavaScript, NodeJS, SQL, NoSQL, MongoDB, HTML, CSS</p>
                    <li><b>Tools</b></li> <p>Express, MongoDB, Mongoose, APIs, Bootstrap, React</p>
                    <li><b>Applications</b></li> <p>GitHub, Heroku </p>
                    <li><b>Technical Writing</b></li> <p>manuals, reports, science and technology, technical editing</p>

                    <h2>PROJECTS</h2>
                    <hr></hr>


                    <li><b>Neighborly</b></li>
                    <p>summary: a community hub to facilitate and improve communication and connection for my city's mutual aid effort</p>
                    <p>role: concept, user authentication through auth0, MVC content, API routes</p>
                    <p>tools: mongodb, express, javascript, node, react, auth0, bootstrap, Heroku,</p>

                    <li><b>Fung-id</b></li>
                    <p>summary: an application for storing photos and gps location of foraging finds and keeping track of prime spots.</p>
                    <p>role: concept, cloudinary image functionality</p>
                    <p>tools: javascript, cloudinary, express, node, handlebars, heroku</p>



                    <li><b>HTML Generator</b></li>

                    <p>summary: a nodejs content management system for maintaining a database of employee information</p>
                    <p>role: author/solo project</p>
                    <p>tools: nodejs, inquirer npm, javascript, SQL and MySQL Workbench</p>

                    <h2>EXPERIENCE</h2>
                    <hr></hr>

                    <h4>Internship, Brookhurst Jr. High AUHSD March - May 2020</h4>
                    <p>Technical Writing, Editing, Revision</p>
                    <h4>Massage Therapy 2015 - 2020</h4>
                    <p>self-employed</p>

                    <h2>EDUCATION</h2>
                    <hr></hr>

                    <h4>University of Pennsylvania, LPS - Coding Boot Camp	May 2021</h4>
                    <p>Certificate, Full Stack Development</p>
                    <p>California State University, Long Beach Graduated May 2020</p>
                    <p>Bachelor of Arts, English, Creative Writing</p>

                    <h4>Certificate, Technical and Professional Writing Program GPA 3.77</h4>
                    <p>Long Beach City College Graduated May 2017</p>
                    <p>Associate of Arts, English, Honors ProgramGPA 3.61</p>
                    <p>Jacaranda Essay Contest, Expository Category Winner, May 2017</p>

                    <h4>Career Networks Institute December 2009</h4>
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