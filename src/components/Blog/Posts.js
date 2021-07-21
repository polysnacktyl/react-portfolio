import React from 'react';
import Post0 from '../../assets/data/blog/Post0';
import Post01 from '../../assets/data/blog/Post01';
import Post02 from '../../assets/data/blog/Post02';
import Post03 from '../../assets/data/blog/Post03';

const posts = {
    hello: Post0,
    Post1: Post01,
    Post2: Post02,
    Post3: Post03
};



function Posts(props) {
    const Post = posts[props.post]
    return (

        <Post />

    )
}

export default Posts;