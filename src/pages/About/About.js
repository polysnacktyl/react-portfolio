import React from 'react';
import AboutData from '../../assets/data/about';
import './About.css';

const About = () => {
    const about = AboutData.map(about => {
        return (
            <div key={about.id} className='content-container'>


                <div className='content'>
                    <div className='image-outer'>
                        <div className='image-container'>
                            <img src={about.image} alt="alt"></img>
                        </div>
                    </div>
                    <div className='text-outer'>
                        <div className='text-container'>
                            <div className='text'>
                                {about.paragraph1}</div>
                            <div className='text'>
                                {about.paragraph2}
                                <div className='skillz'>
                                    <ul className='skillz'>
                                        <li>
                                            - {about.li1}
                                        </li>
                                        <li>
                                            - {about.li2}
                                        </li>
                                        <li>
                                            - {about.li3}
                                        </li>
                                        <li>
                                            - {about.li4}
                                        </li>
                                        <li>
                                            - {about.li5}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='text'>
                                {about.paragraph3}
                            </div>
                        </div>

                    </div>

                </div >
            </div >


        )
    })

    return (
        <div>
            {about}
        </div>
    )
};

export default About;