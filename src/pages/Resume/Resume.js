import React from "react";
import "./resume.css";

class Resume extends React.Component {
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="page">
                        <div className='resume'>
                            <h1>AMANDA HAMILTON</h1>
                            <div className="contactMe">
                                <ul>
                                    <li>657-859-1763</li>
                                    <li><a href="mailto: the.a.hamilton@gmail.com" target="_blank" rel="noopener noreferrer">the.a.hamilton@gmail.com</a></li>
                                    <li>Pittsburgh, PA 15224</li>
                                </ul>
                            </div>

                            {/* <hr></hr> */}

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
                            <p>Project: A community hub to facilitate and improve communication and connection for my city's mutual aid effort.</p>
                            <p>My role: Concept, user authentication with Auth0, MVC content, API routes</p>
                            <p>Tools: MongoDB, Express, JavaScript, NodeJS, React, Auth0, Bootstrap, Heroku, HTML, CSS</p>

                            <li><b>FungID</b></li>
                            <p>Project: An application for storing photos and GPS location of foraging finds and keeping track of prime spots..</p>
                            <p>My role: Concept, Cloudinary image and EXIF data manipulation</p>
                            <p>Tools: JavaScript, Cloudinary, Express, NodeJS, Handlebars, Heroku</p>

                            <li><b>Budget Tracker</b></li>

                            <p>Project: A progressive web app designed to track a budget with and without internet connectivity.</p>
                            <p>My role: Adding back-end API routes and database setup so provided front-end code would function properly.</p>
                            <p>Tools: Express, MongoDB and Atlas, NoSQL, Mongoose, MVC design, Heroku </p>

                            <h2>EXPERIENCE</h2>
                            <hr></hr>

                            <li><b>Internship, Brookhurst Jr. High, Anaheim, CA (05/20)</b></li>
                            <p>Technical Writing, Editing, Revision</p>
                            <p>Revised the student handbook in tone, content, and design to align with campus culture, improve its utility, and
                            appeal more to its intended audience. Reduced the overall page count, saving future resources and printing costs.
                            </p>
                            <li><b>Massage Therapy, Soothe, Inc., CA (2015 - 2020)</b></li>
                            <p>Worked with clients to identify their needs and the root causes of their concerns. Helped build an understanding of
                            my assessments and recommendations, then formed and implemented treatment plans. Gained a pool of regular
                            clients who came to depend on my service and expertise and maintained a 4.8/5 rating working through the service.
                            </p>

                            <h2>EDUCATION</h2>
                            <hr></hr>

                            <li><b>University of Pennsylvania, LPS - Coding Boot Camp (05/21)</b></li>
                            <p>Certificate, Full Stack Development</p>


                            <li><b>California State University, Long Beach(05/20)</b></li>
                            <p>Bachelor of Arts, English, Creative Writing</p>
                            <p>Certificate, Technical and Professional Writing</p>
                            <li><b>Long Beach City College (05/17)</b></li>
                            <p>Associate of Arts, English</p>
                            <p>Jacaranda Essay Contest, Expository Category Winner</p>

                            <li><b>Career Networks Institute (12/09)</b></li>
                            <p>Certificate, Massage Therapy and Bodywork</p>
                        </div>
                    </div>

                </div>
                <div className='dlPDF'>
                    <a href="https://drive.google.com/uc?export=download&id=1jmA30dBavtQAmnXRFHT9YX_5RCgNk5FV" download><i className="fas fa-save"> </i> download pdf <i className="fas fa-save"> </i></a>
                </div>
            </div>

        )
    }
};

export default Resume;