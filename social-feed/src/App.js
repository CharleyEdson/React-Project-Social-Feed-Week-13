import React, { useState } from "react";
import CreatePost from "./components/CreatePost/CreatePost";
import NavBar from "./components/NavBar/NavBar";
import PostMapper from "./components/Post/PostMapper";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: "Charley Edson", post: "This is a test post", isLiked: false, isDisliked: false},
    { id: 2, name: "Pascal", post: "This is a test post number 2!", isLiked: false, isDisliked: false},
    
  ]);

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="App">
      <div class="Navbar">
        <NavBar />
      </div>
      
      <CreatePost addNewPost={addNewPost} idNum={posts.length} class="Createpost" />
      <br></br>
      <PostMapper postArray={posts}/>
  
      <br></br>
    </div>
  );
}

export default App;
