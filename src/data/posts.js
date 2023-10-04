import imgPost from '../assets/images/imgPost.jpeg';
import { Users } from './Store';

export const POSTS = [
    {
        imageUrl: imgPost,
        user: Users[1].user,
        likes: 298,
        caption: 'willing to watch series,! code with me in react , willing to watch series',
        profile_pic: Users[1].image,
        comments: [
            {
                user: 'rakesh',
                comment: 'This is absolutely stunning! 😍'
            },

        ]
    },
    {
        imageUrl: imgPost,
        user: Users[2].user,
        likes: 329,
        caption: 'order the best with discount here!!',
        profile_pic: Users[2].image,
        comments: [
            {
                user: 'rakesh',
                comment: 'This is absolutely stunning! 😍'
            },
            {
                user: 'kanchan',
                comment: 'Your creativity knows no bounds! 🌟'
            }
        ]
    },
    {
        imageUrl: imgPost,
        user: Users[1].user,
        likes: 1973,
        caption: 'code with me in react',
        profile_pic: Users[1].image,
        comments: [
            {
                user: 'rakesh',
                comment: 'This is absolutely stunning! 😍'
            },
            {
                user: 'kanchan',
                comment: 'Your creativity knows no bounds! 🌟'
            }
        ]
    },

]