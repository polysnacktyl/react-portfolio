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
                    {/* eslint-disable jsx-a11y/anchor-is-valid */}
                    <a className='launch' src={project.urlApp}>launch the app</a>
                    <a className='launch' src={project.urlRepo}>see the code</a>
                </div>
                <div className='discuss'>
                    <div className='description'><h4>Project</h4><p>{project.desc}</p></div>
                </div>

                <div className='details'>
                    <div className='detail'><h4>Challenges</h4><br></br><p>{project.challenges}</p></div>
                    <div className='detail'><h4>Technologies</h4><br></br><p>{project.technologies}</p></div>
                </div>
            </div>
            {/* <div className='icons'>
                <img src={project.icons} />
            </div> */}

            <Link to='/work/coding'><div className='back'>back</div></Link>
        </div>




    )
};

export default CodeProject;

