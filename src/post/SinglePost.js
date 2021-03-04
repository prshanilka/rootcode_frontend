import React from "react";
import axios from "axios";
import Post from "./Post"
import {Link,withRouter
} from "react-router-dom";
class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment:{
        c_text:"",
        postID:""
      },
    };
  }


  async componentDidMount() {

    const abc= this.props.location.state;

    console.log("componentDidMount");
    console.log(abc);
    try {
      const res = await axios.get("http://localhost:4000/comment/"+this.props.location.state.id);

      console.log("result", res.data.data);
      this.setState({ comments: res.data.data });
    } catch (e) {
      console.log(e);
    }
  }
  insertPost = async () => {

    const response = await axios.post(
      "http://localhost:4000/comment/",
      this.state.comment
    ).then(this.props.history.push('/'))
    
  };

 change = (event) => {
   
   this.setState({ comment:{c_text:event.target.value,postID:this.props.location.state.id} });
   console.log(this.state.comment)
  };
  render() {
    return (
      <div className="mainD">
      <div style={{textAlign:"center"}}>
             <h3 style={{textAlign:"center",display:"inline-block"}}>{ this.props.location.state.title}</h3>
            
     
             <Link to="/" className="ls" >
             X
             </Link>
     
             </div>
     
             <hr></hr>
             <Post  title={this.props.location.state.title} description={this.props.location.state.description} comments={this.props.location.state.comments} color={this.props.location.state.color}/>
             {
                  this.state.comments.map(comm => {
                   return (
                     <div key={comm.cID} className="INposts">
                     <p style={{textAlign:"center",margin:"10px"}}>{comm.c_text}</p>
                   </div>
     
                   );
                 })       
           
     
             }
             
        <form>
          <input type="text"  placeholder="Title" name="t_title"label="Title"value={this.state.comment.c_text } onChange={(e) => this.change(e)}/>
          <button type="button" className="buttonb" onClick={this.insertPost}>Comment</button>
        </form>
       </div>
     

    );
  }
}

export default  withRouter(SinglePost);