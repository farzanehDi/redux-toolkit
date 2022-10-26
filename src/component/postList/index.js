import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../redux/postSlice";

const PostList = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.postList)
    const loading = useSelector(state => state.post.loading)
    const errMsg = useSelector(state => state.post.errMsg)

    useEffect(() => {
        dispatch(getPost());
    }, [])

    if(loading) return (<div>loading...</div>)
    if(errMsg) return (<div>{errMsg}</div>)
    return (
        <div>
            post list:
            {
                posts.map((post, index) => {
                   return <div key={`post${index}`}>
                        {post.title}
                    </div>
                })
            }
        </div>
    );
};

export default PostList;