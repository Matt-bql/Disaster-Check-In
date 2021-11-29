import React from "react";

export default function PostForm({
  submitPostHandler,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) {
  return (
    <form onSubmit={submitPostHandler}>
      <input
        value={postTitle}
        placeholder='Post Title'
        onChange={e => setPostTitle(e.target.value)}
      ></input>
      <input
        value={postBody}
        placeholder='Post Content'
        onChange={e => setPostBody(e.target.value)}
      ></input>
      <button>Add Post</button>
    </form>
  );
}
