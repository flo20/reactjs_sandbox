import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Post from "../Posts/Posts";
import posts from ".././postdata";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import "./Blog.css";

const Blog = (props) => {
  let match = useRouteMatch();
  const post = posts;

  const postList = post.map((post) => {
    return (
      <div key={post.id} className="post">
        <img src={post.img} alt={post.title} />
        <div>
          <h1>{props.title}</h1>
          <p>{post.contents}</p>
          <Link to={`${match.url}/${post.title}`}>Read more</Link>
          {/*<Link to={`${match.url}/${post.contents}`}>Read more</Link>*/}
        </div>
      </div>
    );
  });
  return (
    <div className="posts">
      <Switch>
        <Route path="/blog/:CardsId">
          <Post />
        </Route>
        <Route path={match.path}>{postList}</Route>
      </Switch>
    </div>
  );
};

export default Blog;
