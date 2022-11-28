import React, { useState } from 'react';


const CreatePost = (props) => {

  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const [id, setId] = useState(props.idNum);
// Need to add in variable so the id can be added each new post.

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
        
      name: name,
      post: post,
      id: id,

    };
    console.log(newPost);
    props.addNewPost(newPost)
  }

  return (
    <div className="Createpost">
    <form onSubmit={handleSubmit}>
      <div class='createpostname'>
        <label class='createposttitles'>Name</label>
        <input class='inputboxes' type='text' value={name} onChange={(event) => setName(event.target.value)}/><br></br>
      </div>
      
      <div class='createpostpost'>
        <label class='createposttitles'>Post</label>
        <input class='inputboxes' type='text' value={post} onChange={(event) => setPost(event.target.value)}/>
        <button type='submit' class='button'>Create</button>
      </div>
    </form>
    </div>
  );
};

export default CreatePost;
