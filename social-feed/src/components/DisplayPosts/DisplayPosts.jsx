const DisplayPosts = (props) => {
  return (
    <div>
        
      {props.displayedPosts.map((post, index) => {
        return (
          <div>
            <div>{post.name}</div>
            <p>{post.post}</p>
            <div>{post.button}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
