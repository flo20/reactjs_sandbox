import React from "react";
import { Route, Link, useRouteMatch, Switch } from "react-router-dom";
import Post from "../Posts/Posts";
import posts from ".././postdata";

const Blog = () => {
  let match = useRouteMatch();
  const post = posts;

  const postList = post.map((post) => {
    return (
      <div key={post.id} className="post">
        <img src={post.img} alt={post.contents} />
        <div>
          <p>{post.contents}</p>
          <Link to={`${match.url}/${post.contents}`}>Read more</Link>
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
