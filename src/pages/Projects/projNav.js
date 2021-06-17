import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function ChooseGallery() {
    return (
        <div className='content-container'>
            <div className='main'>
                <div className='options'>
                    <Link to='/work/coding'> <div className='choice'>Web Dev Projects</div></Link>
                    <Link to='/work/docs'> <div className='choice'>Tech Writing Portfolio<br></br>
                        (18MB)</div></Link>
                </div>
            </div>
            
        </div>

    )
}

export default ChooseGallery;