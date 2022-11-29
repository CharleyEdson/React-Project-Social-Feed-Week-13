import { useState } from "react";
import { ReactComponent as ThumbsUpIcon } from "../../assets/thumbsup.svg";
import { ReactComponent as ThumbsDownIcon } from "../../assets/thumbsdown.svg";
import React from "react";

const DisplayPosts = ({ post }) => {

  const [thumbsUpButton, setthumbsUpButton] = useState('notliked')
  const [thumbsDownButton, setthumbsDownButton] = useState('notliked')
  function handleClickLike() {
    if (thumbsUpButton === 'notliked'){
      post.isLiked = true;
      post.isDisliked = false;
      setthumbsUpButton('thumbsup');
    }
    else {
      setthumbsUpButton('notliked');
      post.isLiked = false;
      post.isDisliked = false;
    }
  }

  function handleClickDislike() {
    if (thumbsDownButton === 'notliked'){
      post.isDisliked = true;
      post.isLiked = false;
      setthumbsDownButton('thumbsdown');
    }
    else {
      post.isDisliked = false;
      post.isLiked = false;
      setthumbsDownButton('notliked');
    }
  }

  return (
    <div class='Displaypost'>
      <div>
        <div className="createpostname">{post.name}</div>
        <p className="createpostpost">{post.post}</p>
        <div className="createpostpost">
        <ThumbsUpIcon height="1.8rem" className={thumbsUpButton} onClick={handleClickLike} style={{ cursor: "pointer"}}/>
        <ThumbsDownIcon height="1.8rem" className={thumbsDownButton} onClick={handleClickDislike} style={{ cursor: "pointer"}}/>
        </div>
      </div>
    </div>
  );
};

export default DisplayPosts;
