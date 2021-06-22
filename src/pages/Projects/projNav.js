import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function ChooseGallery() {
    return (
        <div className='content-container'>
            <div className='main'>
                <div className='options'>
                <div className='choice'><Link to='/work/coding'>Web Development</Link></div>
                <div className='choice'><Link to='/work/docs'>Technical Writing</Link></div>
                <div className='choice'> <Link to='/work/design'>Design & Visuals</Link></div>
                </div>
            </div>
        </div>
    )
}

export default ChooseGallery;