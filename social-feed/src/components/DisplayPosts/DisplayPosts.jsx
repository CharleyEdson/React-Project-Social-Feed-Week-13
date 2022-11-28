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
      setthumbsUpButton('thumbsup');
    }
    else {
      setthumbsUpButton('notliked');
      post.isLiked = false;
    }
  }

  function handleClickDislike() {
    if (thumbsDownButton === 'notliked'){
      post.isDisliked = true;
      setthumbsDownButton('thumbsdown');
    }
    else {
      post.isDisliked = false;
      setthumbsDownButton('notliked');
    }
  }

  return (
    <div class='Displaypost'>
      <div>
        <div className="createpostname">{post.name}</div>
        <p className="createpostpost">{post.post}</p>
        <ThumbsUpIcon height="1.8rem" className={thumbsUpButton} onClick={handleClickLike} style={{ cursor: "pointer"}}/>
        <ThumbsDownIcon height="1.8rem" className={thumbsDownButton} onClick={handleClickDislike} style={{ cursor: "pointer"}}/>
      </div>
    </div>
  );
};

export default DisplayPosts;
