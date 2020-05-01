import React from "react";
import "./Posts.css";
import { Link, useParams } from "react-router-dom";
import posts from ".././postdata";

const Post = () => {
  let { CardsId } = useParams();
  let post = posts.find((p) => p.contents === CardsId);

  return (
    <div className="post">
      <img src={post.img} alt={post.contents} />
      <p>{post.contents}</p>
      <div>
        <Link to="/blog">Back to Blogs</Link>
      </div>
    </div>
  );
};

export default Post;
