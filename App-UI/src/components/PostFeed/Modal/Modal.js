import React, { useEffect, useRef, useLayoutEffect } from "react";

export default function Modal({ setIsModalOpen, post }) {
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
    setIsModalOpen(false);
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
    <div className='flex justify-center fixed inset-0 bg-opacity-50 z-9 bg-black h-full cursor-default'>
      <div
        ref={node}
        className='flex-column bg-white h-full  w-11/12 mt-12 rounded-lg   fixed z-50 mb-4 '
      >
        <button className='pr-2' onClick={() => setIsModalOpen(false)}>
          X
        </button>
        <div className='flex'>
          {/* <div>PIC</div> */}
          <p className='text-color-small-text font-sans font-base font-medium text-xs sm:block'>
            {/* Posted by {postedBy} */}
          </p>
        </div>
        {/* <p className='flex-auto flex-grow w-full py-2 px-2 mt-4 bg-gray-200 font-sans font-medium text-lg leading-tight '>
          {post.title}
        </p> */}
        <p className='flex-auto flex-grow p-2 font-sans text-base text-md font-normal leading-tight mt-2'>
          {post.body}
        </p>
      </div>
    </div>
  );
}
