// Hooks
import React, { useState } from "react";
// Components
import Modal from "./Modal/Modal.js";

export default function PostFeed({ postedBy, post, isWaiting, datePosted }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function setClosed() {
    setIsModalOpen(false);
    console.log("boop");
  }
  return (
    <div
      onClick={() => setIsModalOpen(true)}
      className='border-no-hover-color hover:border-hover-color mb-2 flex h-full cursor-pointer  border bg-white sm:rounded-md'
    >
      {!isWaiting ? (
        <div className='flex-column my-1  mx-1 h-full w-full px-1'>
          <div className='flex px-4 py-1'>
            <img
              className='mr-4 h-10 w-10 rounded-full'
              src='App-UI/src/assets/hero.webp'
              alt='profile'
            />
            <div>
              {/* items-baseline IS AWESOME!!! */}
              <p className='flex items-baseline'>
                <span className='font-base text-color-small-text mr-2 font-sans text-sm font-medium sm:block'>
                  {postedBy}
                </span>
                <span className='font-sans text-xs font-medium'>
                  {datePosted}
                </span>
              </p>
              <p className='text- my-2 flex-auto flex-grow font-sans font-normal leading-tight'>
                {post.body}
              </p>
              <p className='text-color-small-text text-xs font-bold'>
                <span>cmnt#</span>
                <span>tag</span>
                <span>location</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>Fetching Posts...</div>
      )}
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          post={post}
          setClosed={setClosed}
        ></Modal>
      )}
    </div>
  );
}
