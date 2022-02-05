import React, { useState } from "react";

export default function PostModal({
  post,
  currentUserData,
  deletePostHandler,
  setIsModalOpen,
  isModalOpen,
}) {
  const [delButtonClicked, setDelButtonClicked] = useState(false);

  function deleteHandler(id) {
    deletePostHandler(id);
    setIsModalOpen(!isModalOpen);
  }
  console.log(post.body);
  return (
    <div>
      {/* Only show delete button if the owner of post is the same as the user logged in. */}
      {currentUserData.username === post.postedBy ? (
        <div>
          {delButtonClicked ? (
            <div>
              Are you sure?
              <br />
              <button
                onClick={() => deleteHandler(post.id)}
                className='mr-10 text-red-900'
              >
                yes
              </button>
              <button onClick={() => setDelButtonClicked(!delButtonClicked)}>
                no
              </button>
            </div>
          ) : (
            <button
              className='border-2 border-gray-800 p-2 hover:bg-gray-800 hover:text-red-400'
              onClick={() => setDelButtonClicked(!delButtonClicked)}
            >
              delete post
            </button>
          )}
        </div>
      ) : null}

      <p className='text-md mt-2 flex-auto flex-grow p-2 font-sans text-base font-normal leading-tight'>
        {post.body}
      </p>
    </div>
  );
}
