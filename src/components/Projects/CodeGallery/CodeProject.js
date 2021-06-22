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
            <div key={i}>
                <ul key={i} className='project-links'>
                    <li key={i} className='project-links'>
                        <a key={i} href={url.link} rel="noreferrer" target="_blank">{url.title}</a>
                    </li>
                </ul>
            </div>
        )
    });

    const summary = project.summary.map((section, i) => {
        return (
            <p key={i}>{section.paragraph}</p>
        )
    });

    const challenges = project.challenges.map((section, i) => {
        return (
            <p key={i}>{section.paragraph}</p>
        )
    });

    const icons = project.icons.map((icons, i) => {
        return (
            <div key={i} className='icons'>
                <ul key={i}>
                    <li key={i}>
                        <img key={i} title={icons.title} src={icons.icon} alt={project.alt} />
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
                <div className='project-image'>
                    <img className='screenshot' src={project.image} alt={project.alt}></img>
                </div>
                <div className='project-links'>
                    {url}
                </div>
                <div className='icons'>
                    <div className='icons-row'>
                        {icons}
                    </div>
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

            <Link
                to='/work/coding'>
                <div className='back'>
                    <i className='fas fa-long-arrow-alt-left'></i>
                </div>
            </Link>
        </div>
    )
};

export default CodeProject;