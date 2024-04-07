import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function Posts() {
  return (
    <div>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
}

export default Posts;
