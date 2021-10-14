import React from "react";

export default function InputField({
  buttonClickHandler,
  isClicked,
  setIsClicked,
  setPostInput,
  postInput,
}) {
  return (
    <div className='w-full '>
      {!isClicked ? (
        <button
          onClick={() => setIsClicked(true)}
          placeholder='Click here to make a post.'
          className='flex bg-white my-2 rounded-lg'
        >
          add post
        </button>
      ) : (
        <div className='mb-3 '>
          <input
            value={postInput}
            placeholder='Click here to make a post.'
            onInput={e => setPostInput(e.target.value)}
            className='flex mt-2 w-full h-36 rounded-tl-lg rounded-tr-lg border-2 border-black '
          />
          <div className='bg-white h-10 pb-2 rounded-bl-lg rounded-br-lg border-l-2 border-r-2 border-b-2 border-black'>
            <input type='checkbox' />
            <button onClick={buttonClickHandler} className=''>
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
