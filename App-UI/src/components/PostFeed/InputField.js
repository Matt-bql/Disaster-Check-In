import React from "react";

export default function InputField({
  buttonClickHandler,
  isClicked,
  setIsClicked,
  setPostInput,
  postInput,
}) {
  return (
    <div>
      {!isClicked ? (
        <button
          onClick={() => setIsClicked(true)}
          placeholder='Click here to make a post.'
          className='flex bg-white my-2 rounded-lg'
        >
          add post
        </button>
      ) : (
        <div className='mb-3'>
          <input
            value={postInput}
            placeholder='Click here to make a post.'
            onInput={e => setPostInput(e.target.value)}
            className='flex mt-2 w-72 h-36 rounded-tl-lg rounded-tr-lg '
          />
          <div className='bg-white h-5 pb-2 border-t-2 borderw-72 rounded-bl-lg rounded-br-lg'>
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
