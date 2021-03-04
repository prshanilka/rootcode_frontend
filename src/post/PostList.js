import React from "react";
import axios from "axios";
import Post from "./Post"
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
    console.log("render");
    return (
      <>
            {this.state.posts.map(post => {
              return (
                <Post  title={post.post_title} description={post.post_des} comments={post.comments} color={post.post_t_color}/>
                
              );
            })
            }

      </>
    );
  }
}

export default PostList;