import React from 'react';
import DisplayPosts from '../DisplayPosts/DisplayPosts';

const Post = ({postArray}) => {
    return ( 
        <div>
            {postArray.map((el, index) => <DisplayPosts key={el.id} post={el} />)}
        </div>

    //     <div>
    //     <div>
    //       <div class="postbox">
    //         <div class="nameofpost">{post.name}</div>
    //         <p>{post.post}</p>
    //         <div>{post.button}</div>
    //       </div>
    //     </div>
  
        
    //   </div>
     );
}
 
export default Post;

