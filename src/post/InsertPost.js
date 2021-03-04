import React from "react";
import axios from "axios";
import Post from "./Post"
import {Link
} from "react-router-dom";
import { useState } from "react";

const InsertPost = () => {
  const [post, setPost] = useState({
    title: "",
    color: "",
    description: "",
  });

  const insertPost = async () => {

    const response = await axios.post(
      "http://localhost:4000/post",
      post
    );
    console.log(1, response.data);
  };

  const change = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

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
          <textarea placeholder="description" name="Description" label="Description" value={post.description} onChange={(e) => change(e)}>

          </textarea>
          <button className="buttonb" onClick={insertPost}>Publish</button>
        </form>


      </div>

  );
};

export default InsertPost;
