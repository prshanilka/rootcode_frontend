import React from "react";
import axios from "axios";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: [],
    };
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   const promise = axios.get("https://localhost:5001/api/course");
  //   promise
  //     .then((res) => {
  //       console.log("response", res.data);
  //       const promise = axios.get("https://localhost:5001/api/batch");
  //     })
  //     .catch((error) => console.log(error));
  // }

  async componentDidMount() {
    console.log("componentDidMount");
    try {
      const res = await axios.get("https://localhost:3000/posts");

      console.log("result", res.data);
      this.setState({ Posts: res.data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log("render");
    return (
      <>
        PostList
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>technologies</th>
              <th>Tags</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Posts.map((course, index) => {
              return (
                <tr key={index}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                  <td>{course.technologies}</td>
                  <td>{course.tags}</td>
                  <td>{course.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default PostList;