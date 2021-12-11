import React from "react";

export default function PostForm({ submitPostHandler, postBody, setPostBody }) {
  return (
    <form onSubmit={submitPostHandler}>
      <input
        value={postBody}
        placeholder='Post Content'
        onChange={e => setPostBody(e.target.value)}
      ></input>
      <button>Add Post</button>
    </form>
  );
}
