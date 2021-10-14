import React, { useState } from "react";
import FeedLoop from "./FeedLoop";

export default function PostFeed({ isClicked, posts, setPosts }) {
  return (
    <div>
      {posts.map(item => {
        return (
          <FeedLoop
            key={item.post.id}
            item={item.post}
            posts={posts}
            setPosts={setPosts}
          />
        );
      })}
    </div>
  );
}
