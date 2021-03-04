import PostList from './post/PostList'
import InsertPost from './post/InsertPost'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <>
  <Router>
    <Switch>
          <Route exact path="/">
            <PostList></PostList>
          </Route>
          <Route path="/new">
            <InsertPost />
          </Route>
        </Switch>
  </Router>
    </>
  );
}
function Home() {
  return <h2>Home</h2>;
}
export default App;
