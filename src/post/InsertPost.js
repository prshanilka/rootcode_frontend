import React from "react";
import axios from "axios";
import {Link,useHistory
} from "react-router-dom";
import { useState } from "react";

const InsertPost = () => {
  const history = useHistory();
  const handleClick = () => history.push('/');
  const [post, setPost] = useState({
    title: "",
    color: "",
    description: "asdasdasdasdad",
  });

  const insertPost = async () => {
    console.log(post);
    const response = await axios.post(
      "http://localhost:4000/post",
      post
    ).then(handleClick());
    
  };

  const change = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };
  const cchange=(color)=>{
    
    setPost({
      ...post,
      color:color,
    });
    console.log(post);
  }

  return (
    <div className="mainD">
       <div style={{textAlign:"center"}}>
        <h3 style={{textAlign:"center",display:"inline-block"}}>Create Post</h3>
       

        <Link to="/" className="ls" >
        X
        </Link>

        </div>

        <hr></hr>
        <form>
          <input type="text"  placeholder="Title" name="title"label="Title"value={post.title} onChange={(e) => change(e)}/>
          <textarea placeholder="description" name="description" label="Description" value={post.description} onChange={(e) => change(e)}>

          </textarea>
          <div>
          <label class="cs">Select Color</label>
          <div class="foo blue" style={ (post.color=="blue") ? { border:'1px solid white'} : {border:'1px solid black'} }    onClick={() => cchange("blue")}></div>
          <div class="foo purple" style={ (post.color=="yellow") ? { border:'1px solid white'} : {border:'1px solid black'} } onClick={() => cchange("yellow")}></div>
          <div class="foo wine" style={ (post.color=="pink") ? { border:'1px solid white'} : {border:'1px solid black'} } onClick={() => cchange("pink")}></div>
          </div>
          <button className="buttonb" onClick={insertPost}>Publish</button>
        </form>


      </div>

  );
};

export default InsertPost;
