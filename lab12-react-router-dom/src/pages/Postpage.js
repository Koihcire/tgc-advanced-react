import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';

export default function Postpage(props){
    const [activePostId, setActivePostId] = useState("");
    const [post, setPost] = useState(null);

    //useeffect has 2 arguments. 1. function to call when any of the dependency changes, 2. an array of dependencies
    //ie, when react detext that the activePostId has changed, the first function will run
    //useeffect cannot be an async function, therefore create an async function inside
    useEffect(()=>{
        const fetchPost = async (postId)=>{
            if (postId > 0){
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
                // console.log(response.data)
                setPost(response.data)
            }
        }
        fetchPost(activePostId);
    }
    , [activePostId]
    )

    useEffect(()=>{
        console.log("First Render")
    }, []
    )

    return(
        <React.Fragment>
            <div className='container'>
                <h1>Posts</h1>
                <input type="text" name='activePostId' value={activePostId} onChange={(e)=>{setActivePostId(e.target.value)}}/>
            </div>
            {
                post ? <Fragment>
                    <div>
                        <h1>ID: {post.id}</h1>
                        <h1>Title: {post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                </Fragment> : null
            }
        </React.Fragment>
    )
}