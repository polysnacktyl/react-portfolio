import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function ChooseGallery() {
    return (
        <div className='content-container'>
            <div className='main'>
                <div className='options'>
                    <Link to='/work/coding'> <div className='choice'>Web Development</div></Link>
                    <Link to='/work/docs'> <div className='choice'>Technical Writing</div></Link>
                    <Link to='/work/design'><div className='choice'>Design & Visuals</div></Link>
                </div>
            </div>

        </div>

    )
}

export default ChooseGallery;