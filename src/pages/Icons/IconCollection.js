import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import mongo from '../../assets/icons/mongothicc.svg';
import reactsvg from '../../assets/icons/react.svg';
import expressnew from '../../assets/icons/expressnew.svg'
import htmlnew from '../../assets/icons/htmlnew.svg';
import css from '../../assets/icons/cssnew.svg';
import javascript from '../../assets/icons/javascript.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import bootstrapsvg from '../../assets/icons/bootsvg.svg'
import github from '../../assets/icons/github.svg';
import illustrator from '../../assets/icons/illustrator.svg';
import handlebars from '../../assets/icons/handlebars2.svg';
import SQL from '../../assets/icons/sqlsvg.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import email from '../../assets/icons/email.svg';
import favicon from '../../assets/icons/favicon.ico';
import tester from '../../assets/icons/tester.svg';

function ShowIcons() {
    return (
        <div className='content-container'>
            <div className='icon-set-outer'>
                <div className='svg-text'>

                    <div className='icon-desc'>
                        <p>I wanted a cohesive set of SVG images to use in the detail view of my web dev projects section. Finding a pre-existing set that included all the icons I wanted and appealed to me aesthetically proved impossible, so I made my own. These were crafted with a combination of Procreate on iPad and Adobe Illustrator.</p>
                        <p>My favicon is a tiny-fied version of a drawing I made of the Moon. Why the moon? Because it was the roundest image in my sketchbook when I noticed my lack-of-favicon was causing a 404 loading error. And also because I'm slightly obsessed with the moon. </p>
                    </div>
                </div>
                <div className='svg'>
                    <div className='design-icons'>
                        <img src={javascript} title="JavaScript" alt='SVG icon'></img>
                        <img src={nodejs} title="NodeJS" alt='SVG icon'></img>
                        <img src={mongo} title="MongoDB" alt='SVG icon'></img>
                        <img src={SQL} title="SQL" alt='SVG icon'></img>
                        <img src={expressnew} title="Express" alt='SVG icon'></img>
                        <img src={reactsvg} title="React" alt='SVG icon'></img>
                    </div>
                    <div className='design-icons'>
                        <img src={htmlnew} title="HTML" alt='SVG icon'></img>
                        <img src={css} title="CSS" alt='SVG icon'></img>
                        <img src={handlebars} title="Handlebars" alt='SVG icon'></img>
                        <img src={bootstrapsvg} title="Bootstrap" alt='SVG icon'></img>
                    </div>
                    <div className='design-icons'>
                        <img src={tester} title='heroku' alt='SVG icon'></img>
                        <img src={illustrator} title="Adobe Illustrator" alt='SVG icon'></img>
                        <img src={github} title="GitHub" alt='SVG icon'></img>
                        <img src={linkedin} title="LinkedIn" alt='SVG icon'></img>
                        <img src={email} title="Email" alt='SVG icon'></img>
                    </div>
                    <div className='moon'>
                        <img src={favicon} title="the moon!" alt='favicon'></img>
                    </div>



                </div>
                </div>
                <Link to='/work'><div className='back'>back</div></Link>
            </div>


    )
}

export default ShowIcons;