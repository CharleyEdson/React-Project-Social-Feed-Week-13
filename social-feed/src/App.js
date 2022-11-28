import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import CreatePost from "./components/CreatePost/CreatePost";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Post from "./components/Post/Post";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: "Charley Edson", post: "This is a test post", isLiked: false, isDisliked: false},
    
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div className="App">
      <div class="Navbar">
        <NavBar />
      </div>
      
      <CreatePost addNewPost={addNewPost} idNum={posts.length} class="Createpost" />
      <br></br>
      <Post postArray={posts}/>
  
      <br></br>
    </div>
  );
}

export default App;
