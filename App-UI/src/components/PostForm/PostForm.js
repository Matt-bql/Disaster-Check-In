import React from "react";

export default function PostForm({ submitPostHandler, postBody, setPostBody }) {
  return (
    <form onSubmit={submitPostHandler} className='flex  w-full'>
      <input
        className='h-12 border-2 border-r-0 border-gray-300 rounded-l-md w-full bg-gray-100  '
        value={postBody}
        placeholder='Create Post'
        onChange={e => setPostBody(e.target.value)}
      ></input>
      <button
        className='border-2 border-l rounded-r-md h-12 px-2
      bg-gray-100 border-gray-300 hover:bg-gray-300'
      >
        Submit
      </button>
    </form>
  );
}
