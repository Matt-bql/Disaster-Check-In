import React from "react";

export default function FeedLoop({ item }) {
  return (
    <div className='flex my-2 w-full h-full border-2 border-grey-300 shadow-lg  '>
      <div className=' flex-column my-1 w-full h-full h-20 mx-1 py-0 '>
        <div className='flex border-b-2'>
          <div>PIC</div>
          <p>UserName</p>
          <p>RESOLVED</p>
        </div>
        <p className='flex-auto flex-grow mx-2 '>{item.content}</p>
        <div className='flex border-t-2'>
          <p>likes</p>
          <p>cmnt#</p>
          <p className=''>tag</p>
        </div>
      </div>
    </div>
  );
}
