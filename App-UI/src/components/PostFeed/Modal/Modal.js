import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

export default function Modal({
  setIsModalOpen,
  isModalOpen,
  post,
  currentUserData,
  deletePostHandler,
}) {
  const [delButtonClicked, setDelButtonClicked] = useState(false);

  const node = useRef();

  // * The code below enables us to click outside of the modal to close it.
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsModalOpen(!isModalOpen);
  };

  // * The code below disables scrolling of document when modal is open.
  (function useLockBodyScroll() {
    useLayoutEffect(() => {
      // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
      // Re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
  })();

  return (
    <div className='z-9 fixed inset-0 flex h-full cursor-default justify-center bg-black bg-opacity-50'>
      <div
        ref={node}
        className='flex-column fixed z-50  mt-12 mb-4 h-full   w-11/12 rounded-lg bg-white '
      >
        <button className='pr-2' onClick={() => setIsModalOpen(!isModalOpen)}>
          X
        </button>

        {/* Only show delete button if the owner of post is the same as the user logged in. */}
        {currentUserData.username === post.postedBy ? (
          <div>
            {delButtonClicked ? (
              <div>
                Are you sure?
                <p
                  onClick={() => deletePostHandler(post.id)}
                  className='text-red-900'
                >
                  yes
                </p>
                <p onClick={() => setDelButtonClicked(!delButtonClicked)}>no</p>
              </div>
            ) : (
              <button
                className='border-2 p-2'
                onClick={() => setDelButtonClicked(!delButtonClicked)}
              >
                delete post
              </button>
            )}
          </div>
        ) : (
          <div></div>
        )}

        <div className='flex'>
          {/* <div>PIC</div> */}
          <p className='font-base text-color-small-text font-sans text-xs font-medium sm:block'>
            {/* Posted by {postedBy} */}
          </p>
        </div>
        {/* <p className='flex-auto flex-grow w-full py-2 px-2 mt-4 bg-gray-200 font-sans font-medium text-lg leading-tight '>
          {post.title}
        </p> */}
        <p className='text-md mt-2 flex-auto flex-grow p-2 font-sans text-base font-normal leading-tight'>
          {post.body}
        </p>
      </div>
    </div>
  );
}
