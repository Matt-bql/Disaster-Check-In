import React from "react";

export default function PostForm({ submitPostHandler, postBody, setPostBody }) {
  return (
    <form onSubmit={submitPostHandler} className='flex w-full'>
      <input
        className='h-12 w-full rounded-l-md border-2 border-r-0 border-gray-300 bg-gray-100  '
        value={postBody}
        placeholder='Create Post'
        onChange={e => setPostBody(e.target.value)}
      ></input>
      <button
        className='h-12 rounded-r-md border-2 border-l border-gray-300
      bg-gray-100 px-2 hover:bg-gray-300'
      >
        Submit
      </button>
    </form>
  );
}
