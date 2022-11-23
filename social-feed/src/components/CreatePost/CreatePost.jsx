import React, { useState } from 'react';


const CreatePost = (props) => {

  const [name, setName] = useState('');
  const [post, setPost] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
        name: name,
        post: post
    };
    console.log(newPost);
    props.addNewPost(newPost)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' value={name} onChange={(event) => setName(event.target.value)}/><br></br>
      <label>Post</label>
      <input type='text' value={post} onChange={(event) => setPost(event.target.value)}/>
      <button type='submit'>Create</button>
    </form>
  );
};

export default CreatePost;
