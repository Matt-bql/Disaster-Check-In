import { useState, useEffect, useRef, useLayoutEffect } from "react";

export default function Modal({ children, isModalOpen, setIsModalOpen }) {
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
      <div className='flex-column fixed z-50  mt-12 mb-4 h-full  w-11/12 rounded-lg bg-white md:w-8/12 lg:w-6/12'>
        <button
          className='float-right m-4 border-2 border-gray-800 px-2 hover:bg-gray-800 hover:text-red-400'
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
