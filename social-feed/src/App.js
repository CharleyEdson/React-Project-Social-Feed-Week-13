import React, {useState} from 'react';
import DisplayPosts from './components/DisplayPosts/DisplayPosts'
import CreatePost from './components/CreatePost/CreatePost'


function App() {

  const[posts, setPosts] = useState([{name: "Charley Edson", post: "This is a test post", button: false}])
  
  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts)
  }


  return (
    <div className="App">

      <CreatePost addNewPost={addNewPost}/>
      <DisplayPosts displayedPosts={posts}/>
             
      

    </div>
  );
}

export default App;
