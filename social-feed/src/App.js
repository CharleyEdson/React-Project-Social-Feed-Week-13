import React, {useState} from 'react';
import DisplayPosts from './components/DisplayPosts/DisplayPosts'
import CreatePost from './components/CreatePost/CreatePost'


function App() {

  const[posts, setPosts] = useState([{name: "Charley Edson", message: "This is a test post", button: false}])

  return (
    <div className="App">
      {/* <CreatePost /> */}
      <DisplayPosts displayedPosts={posts}/>
             
      

    </div>
  );
}

export default App;
