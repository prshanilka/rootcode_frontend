import '../style.css';
import React from 'react';
const SPost = (props) => {

  return(
    <div className="post" style={{margin:"50px"}}>
          <div className="INpost">
            <h2 style={{textAlign:"center",margin:"10px",color:props.color}}>{props.title}</h2>
            <p style={{textAlign:"center",margin:"10px"}}>{props.description}</p>
            <hr></hr>
          </div>
 
      <p style={{textAlign:"right",margin:"10px"}}>{props.comments} Comments</p>
    </div>
    
  );
};

export default SPost;