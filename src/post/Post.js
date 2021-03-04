import '../style.css';
import React from 'react';
const Post = (props) => {
  return(
    <div className="post">
          <div className="INpost">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
 
      <h3>{props.comments} Comments</h3>
    </div>
    
  );
};

export default Post;