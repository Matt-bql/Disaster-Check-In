import React from "react";
import PostFeed from "./PostFeed";

export default function PostFeedLoop({
  posts,
  isWaiting,
  deletePostHandler,
  currentUserData,
}) {
  return (
    <div>
      {posts.map(post => {
        return (
          <PostFeed
            key={post.id}
            id={post.id}
            post={post}
            isWaiting={isWaiting}
            datePosted={post.datePosted}
            deletePostHandler={deletePostHandler}
            currentUserData={currentUserData}
          />
        );
      })}
    </div>
  );
}
