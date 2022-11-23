const DisplayPosts = (props) => {
  return (
    <div>
        
      {props.displayedPosts.map((post, index) => {
        return (
          <div>
            <div>{post.name}</div>
            <div>{post.message}</div>
            <div>{post.button}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
