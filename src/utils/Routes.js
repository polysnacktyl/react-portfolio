import Home from '../pages/Home/Home';
import Post01 from '../assets/data/blog/Post01'
import Post02 from '../assets/data/blog/Post02'
import Post03 from '../assets/data/blog/Post03'
import PostList from '../components/Blog/PostList';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/blog',
        component: PostList,
        routes: [
            {
                path: '/blog/0',
                component: Post01
            },
            {
                path: '/blog/1',
                component: Post02
            },
            {
                path: '/blog/2',
                component: Post03
            },
        ]
    }]


export default routes;
