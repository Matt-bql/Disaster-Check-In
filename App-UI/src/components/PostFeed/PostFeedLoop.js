import React from "react";
import PostFeed from "./PostFeed";

export default function PostFeedLoop({ posts, isWaiting }) {
  return (
    <div>
      {posts.map(post => {
        return (
          <PostFeed
            key={post.id}
            id={post.id}
            postedBy={post.postedBy}
            post={post}
            isWaiting={isWaiting}
          />
        );
      })}
    </div>
  );
}
