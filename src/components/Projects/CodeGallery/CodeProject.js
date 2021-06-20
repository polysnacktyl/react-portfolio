import React from "react";
import { Link, useParams } from 'react-router-dom';
import ProjectsData from '../../../assets/data/projects';
import './project.css';



function CodeProject() {
    const { projectID } = useParams()
    // eslint-disable-next-line
    const project = ProjectsData.find(proj => proj.id == projectID)

    const url = project.url.map((url, i) => {
        return (
            <div>
                <ul className='project-links'>
                    <li className='project-links'>
                        <a href={url.link} rel="noreferrer" target="_blank">{url.title}</a>
                    </li>
                </ul>
            </div>
        )
    });

    // const summaryTitle = project.summaryTitle.map((section, i) => {
    //     return (
    //         <h4 key={i}>{section.title}</h4>
    //     )
    // });

    const summary = project.summary.map((section, i) => {
        return (
            <p key={i}>{section.paragraph}</p>
        )
    });

    const challengesTitle = project.challenges.map((section, i) => {
        return (
            <h4 key={i}>{section.title}</h4>
        )
    });

    const challenges = project.challenges.map((section, i) => {
        return (
            <p key={i}>{section.paragraph}</p>
        )
    });

    const icons = project.icons.map((icons, i) => {
        return (
            <div className='icons'>
                <ul>
                    <li>
                        <img key={i} title={icons.title} src={icons.icon} />
                    </li>
                </ul>
            </div>
        )
    });

    return (
        <div className="content-container">
            <div className='project'>

                <div className='title'>{project.title}</div>
                {/* eslint-disable */}
                <img className='img' src={project.image} alt={project.alt}></img>

                <div className='project-links'>
                    {url}
                </div>

                <div className='discuss'>
                    <div className='description'>
                        <h4>{project.summaryTitle}</h4>
                        {summary}
                    </div>
                    <div className='description'>
                        <h4>{project.challengesTitle}</h4>
                        {challenges}
                    </div>
                </div>
            </div>

            <div className='icons'>
                {icons}
            </div>

            <div className='projectsNav'>
            </div>
            <Link to='/work/coding'><div className='back'><i class='fas fa-long-arrow-alt-left'></i> </div></Link>
        </div>
    )
};


export default CodeProject;
