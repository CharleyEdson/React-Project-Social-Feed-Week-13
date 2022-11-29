import React from 'react';
import PostPresenter from '../DisplayPosts/PostPresenter';

const PostMapper = ({postArray}) => {
    let tempArray = [...postArray].reverse()
    return ( 
        <div>
            {tempArray.map(el => <PostPresenter key={el.id} post={el} />)}
        </div>

     );
}
 
export default PostMapper;

