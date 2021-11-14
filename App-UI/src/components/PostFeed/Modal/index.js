import React, { useEffect, useRef } from "react";
import PostModalContent from "./PostModalContent";

export default function Modal({ open, setIsModalOpen, children }) {
  const node = useRef();

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

  return (
    <div className='flex justify-center overflow-hidden fixed inset-0 bg-opacity-50 z-9 bg-black h-full '>
      <div
        ref={node}
        className='flex bg-purple-200 h-full overflow-auto md:w-1/2 rounded-lg  p-4 fixed z-50 mb-4 '
      >
        {children}
      </div>
      <button onClick={() => setIsModalOpen(false)}>X</button>
    </div>
  );
}
