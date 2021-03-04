import PostList from './post/PostList';
import InsertPost from './post/InsertPost';
import SinglePost from './post/SinglePost';
import { Route, Router } from "react-router-dom";
function App() {

  return (

<Router>
        <Route exact path="/">
          <PostList></PostList>
        </Route>
        <Route path="/new">
          <InsertPost />
        </Route>
        <Route path="/single">
          <SinglePost />
        </Route>
</Router>
  );
}

export default App;
