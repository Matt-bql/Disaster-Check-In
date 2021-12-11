// Hooks
import React, { useState } from "react";
// Components
import Modal from "./Modal/Modal.js";

export default function PostFeed({ postedBy, post, isWaiting, datePosted }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      onClick={() => setIsModalOpen(true)}
      className='flex mb-2 h-full border hover:border-hover-color border-no-hover-color  bg-white cursor-pointer sm:rounded-md'
    >
      {!isWaiting ? (
        <div className='flex-column my-1 mx-1 px-1 w-full h-full'>
          <div className='flex px-4 py-1'>
            <img className='w-10 h-10 rounded-full mr-4' src='' alt='' />
            <div>
              {/* items-baseline IS AWESOME!!! */}
              <p className='flex items-baseline'>
                <span className='text-color-small-text font-sans font-base font-medium text-sm sm:block mr-2'>
                  {postedBy}
                </span>
                <span className='text-xs font-sans font-medium'>
                  {datePosted}
                </span>
              </p>
              <p className='flex-auto flex-grow font-sans text- font-normal leading-tight my-2'>
                {post.body}
              </p>
              <p className='text-color-small-text font-bold text-xs'>
                <span>cmnt#</span>
                <span>tag</span>
                <span>location</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // <div className='flex-column my-1 mx-1 px-1 w-full h-full'>
        //   <div className='flex-column '>
        //     <div className='flex'>
        //       {/* <div>PIC</div> */}
        //       <p className='text-color-small-text font-sans font-base font-medium text-xs sm:block'>
        //         Posted by {postedBy}
        //       </p>
        //     </div>

        //     <h2 className='flex-auto flex-grow  font-sans font-medium text-lg leading-tight mt-2'>
        //       {post.title}
        //     </h2>
        //   </div>

        //   <p className='flex-auto flex-grow  font-sans text-base text-md font-normal leading-tight mt-2'>
        //     {post.body}
        //   </p>

        //   <div className='flex   font-bold text-xs justify-evenly'>
        //     <p>Location</p>

        //     <p>cmnt#</p>
        //     <p className=''>tag</p>
        //   </div>
        // </div>
        <div>Fetching Posts...</div>
      )}
      <div>
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            post={post}
          ></Modal>
        )}
      </div>
    </div>
  );
}
