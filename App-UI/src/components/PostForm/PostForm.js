import React from "react";

export default function PostForm({ submitPostHandler, postBody, setPostBody }) {
  return (
    <form onSubmit={submitPostHandler} className='w-full'>
      <input
        className='h-8 border-2 w-full bg-gray-100'
        value={postBody}
        placeholder='Create Post'
        onChange={e => setPostBody(e.target.value)}
      ></input>
      {/* <button>Add Post</button> */}
    </form>
  );
}
