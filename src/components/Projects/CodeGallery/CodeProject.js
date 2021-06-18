import React from "react";
import { Link, useParams } from 'react-router-dom';
import ProjectsData from '../../../assets/data/projects';
import './project.css';

function CodeProject() {
    const { projectID } = useParams()
    // eslint-disable-next-line
    const project = ProjectsData.find(proj => proj.id == projectID)

    return (
        <div className="content-container">
            <div className='project'>
                
                <div className='title'>{project.title}</div>
                {/* eslint-disable */}
                <img className='img' src={project.image} alt={project.alt}></img>

                <div className='project-links'>
                    <ul className='project-links'>
                        <li className='project-links'> <a hidden={project.urlApp == null} href={project.urlApp} rel="noreferrer" target="_blank">launch the app</a></li>
                        <li className='project-links'> <a href={project.urlRepo} rel="noreferrer" target="_blank">see the code</a></li>
                    </ul>
                </div>

                <div className='discuss'>
                    <div className='description'>
                        <h4>Project</h4>
                        <p>{project.desc}</p></div>
                    <div className='description'>
                        <h4>Challenges</h4>
                        <p>{project.challenges}</p>
                    </div>
                </div>
            </div>

            <div className='icons'>
                <img src={project.icon1} />
                <img src={project.icon2} />
                <img src={project.icon3} />
                <img src={project.icon4} />
                <img src={project.icon5} />
                <img src={project.icon6} />
                <img src={project.icon7} />
            </div>




            <div className='projectsNav'>
                {/* <Link to='/work/coding/'><i class="fas fa-angle-double-left"></i></Link>
                <Link to='/work/coding/'><i class="fas fa-angle-double-right"></i></Link> */}
            </div>
            <Link to='/work/coding'><div className='back'><i class='fas fa-long-arrow-alt-left'></i> </div></Link>


        </div>
    )

};


export default CodeProject;



{/* </div>

                <div className='details'> */}
{/* <div className='detail'> */ }
{/* <h4>Challenges</h4><br></br><p>{project.challenges}</p></div> */ }
{/* <div className='detail'><h4>Technologies</h4><br></br><p>{project.technologies}</p></div> */ }
{/* </div> */ }