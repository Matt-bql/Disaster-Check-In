import React from "react";

export default function PostFormConditionalHandler({
  setIsInputClicked,
  isInputClicked,
}) {
  return (
    <div className='flex w-full'>
      <input
        className='h-12 w-full rounded-md border-2 border-gray-300 bg-gray-100'
        placeholder='Create Post'
        onClick={() => setIsInputClicked(!isInputClicked)}
      />
    </div>
  );
}
