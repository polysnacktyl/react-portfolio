import React from 'react';
import ProjectsData from '../../../assets/data/projects';
import { Link } from 'react-router-dom';
import '../CodeGallery/gallery.css';


const Projects = () => {
    const projects = ProjectsData.map(project => {
        return (
            <div key={project.id} className='card'>
                <div className='card-header'>{project.title}</div>
                <div className='card-body'>
                    <Link to={`/work/coding/${project.id}`}><img className='img' src={project.image} alt={project.alt}></img></Link>
                </div>
            </div>
        );
    });
    return (
        <>
            <div className='content-container'>
                <div className='outer-back'>
                    <div className='card-deck'>
                        {projects}
                    </div>
                </div>
                <Link to='/work'><div className='back'>back</div></Link>
            </div>
        </>
    );
};
export default Projects;