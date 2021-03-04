import React from "react";
import axios from "axios";
import Post from "./Post"
import {Link,useHistory
} from "react-router-dom";
class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }


  async componentDidMount() {
    console.log("componentDidMount");
    try {
      const res = await axios.get("http://localhost:4000/post");

      console.log("result", res.data.data);
      this.setState({ posts: res.data.data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (

      <div className="mainD">
        <h3 style={{textAlign:"center"}}>Home</h3>
        <hr></hr>
        <Link to="/new">
          <button className="buttonc">Create New Post</button>
        </Link>
           

            {this.state.posts.map(post => {
              return (
                <Link key={post.postID} to={{
                  pathname: "/single",
                  state: { title: post.post_title,description:post.post_des,color:post.post_t_color,id:post.postID,comments:post.comments }
                }} style={{textDecoration:"none"}}>
                  <Post  title={post.post_title} description={post.post_des} comments={post.comments} color={post.post_t_color}/>
                </Link>
              );
            })
            }

      </div>
    );
  }
}

export default PostList;