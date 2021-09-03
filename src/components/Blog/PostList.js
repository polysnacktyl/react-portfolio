import React, { useState, useContext, useEffect } from 'react';
import { Link, Switch } from 'react-router-dom';
import { Context } from '../../utils/Reducer';
import BlogPosts from '../../assets/data/blog/posts';
import RouteWithSubRoutes from '../../utils/RouteWithSubRoutes';
import './style.css';

const PostList = ({ routes }) => {
    //eslint-disable-next-line
    const { state, dispatch } = useContext(Context);
    //eslint-disable-next-line
    const [post, setPost] = useState('');
    //eslint-disable-next-line
    const [posts, setPosts] = useState('');
    //eslint-disable-next-line
    const [loading, setLoading] = useState(true);


    const success = async () => {
        setPosts(BlogPosts);

        dispatch({
            type: 'setPosts',
            payload: BlogPosts
        })
    };

    const fail = (error) => {
        dispatch({
            type: 'fail',
            payload: { error: error.message }
        })
        console.log(error);
    }

    function loadPage() {
        setTimeout(async () => {
            try {
                await success();
                setLoading(false);
            } catch (error) {
                await fail(error);
            }
        }, 0)
    };



    const handleSelectPost = (e) => {

        setPost(BlogPosts[e.target.value]);

        dispatch({
            type: 'thisPost',
            payload: BlogPosts[e.target.value]
        })

    };

    useEffect(() => {
        loadPage();
        // eslint-disable-next-line
    }, []);


    return (
        <div className='content-container'>
            <div className='the-whole-enchibloga'>
                <div className='list'>
                    <div className='list-return'>
                        {BlogPosts.map(post => {
                            return (

                                <div key={post.id} className='list'>

                                    <Link to={post.path}>
                                        <button value={post.id} onClick={(e) => handleSelectPost(e)}>
                                            {post.title}
                                        </button>

                                    </Link>
                                </div>

                            )
                        })}
                    </div>

                    <div className='post-container'>
               
                        <Switch>
                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route} />
                            ))}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostList;