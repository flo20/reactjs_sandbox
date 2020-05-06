import React from "react";
import "./Posts.css";
import { useParams, Link } from "react-router-dom";
import posts from ".././postdata";

const Post = (props) => {
  let { CardsId } = useParams();
  let post = posts.find((p) => p.title === CardsId);

  return (
    <div className="mini_post">
      <img src={post.img} alt={post.title} />
      <p>{post.title}</p>
      <p>{post.contents}</p>
      <div>
        <Link to="/blog">Back to blog</Link>
      </div>
    </div>
  );
};

export default Post;
