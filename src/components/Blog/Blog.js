import React, { useState } from 'react';
import Posts from './Posts';
import './style.css';

function Blog(props) {
    const [post, setPost] = useState('hello');

    return (
        <div className='content-container'>
            <div className='the-whole-enchibloga'>
                <div className='list-return'>
                    <button onClick={() => setPost('Post1')}>
                    RESTful Thinking
                    </button>
                    <button onClick={() => setPost('Post2')}>
                    Cookies
                    </button>
                    <button onClick={() => setPost('Post3')}>
                    This Very Blog
                    </button>
                </div>
                <div className='post-container'>
                    <Posts post={post} />
                </div>
            </div>
        </div>
    );
}

export default Blog;