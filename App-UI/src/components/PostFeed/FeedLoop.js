import React, { useState } from "react";
import Modal from "./Modal";

export default function FeedLoop({ item }) {
  const name = "name";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      onClick={() => setIsModalOpen(true)}
      className='flex mb-2 h-full border hover:border-hover-color border-no-hover-color  bg-white cursor-pointer sm:rounded-md'
    >
      <div className='flex-column my-1 mx-1 px-1 w-full h-full'>
        <div className='flex '>
          <div>PIC</div>
          <p className='text-color-small-text font-sans font-base text-xs hidden sm:block'>
            Posted by {name}
          </p>
          <p>RESOLVED</p>
        </div>
        <p className='flex-auto flex-grow font-sans font-medium text-lg leading-tight'>
          {item.content}
        </p>
        <div className='flex  text-color-small-text font-bold text-sm'>
          <p>likes</p>

          <p>cmnt#</p>
          <p className=''>tag</p>
        </div>
      </div>
      <div>
        {isModalOpen && (
          <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen}>
            {item.content}
          </Modal>
        )}
      </div>
    </div>
  );
}
