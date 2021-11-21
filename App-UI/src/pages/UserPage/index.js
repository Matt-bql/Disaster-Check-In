import React, { useState } from "react";
import PostFeed from "../../components/PostFeed";
import HeaderLoggedIn from "../../components/Header/HeaderLoggedIn";
import APICalls from "../../components/APICalls/APICalls";

export default function AccountPage() {
  const [buttonn, setButtonn] = useState(false);

  const [posts, setPosts] = useState([
    {
      post: {
        userProfilePicture: "photo",
        userName: "username",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        tag: "Lorem ipsum dolor Lorem ipsum dolor",
        resolution: "resolution of post request.",
        likes: "5",
        commentCountNumber: "3",
      },
    },
    {
      post: {
        userProfilePicture: "photo",
        userName: "username",
        content: "need food",
        tag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
        resolution: "resolution of request.",
        likes: "222",
        commentCountNumber: "3",
      },
    },
  ]);
  const [isClicked, setIsClicked] = useState(false);
  const [postInput, setPostInput] = useState("");
  console.log(postInput);

  function buttonClickHandler() {
    console.log("clicked");
    if (postInput === "") {
      return alert("Input cannot be empty");
    }
    setPostInput("");
    setPosts([
      {
        post: {
          userProfilePicture: "photo",
          userName: "username",
          content: postInput,
          tag: "Lorem ipsum dolor",
          resolution: "Resolution of request.",
          likes: "222",
          commentCountNumber: "3",
        },
      },
      ...posts,
    ]);
  }
  console.log(posts);
  return (
    <div className='flex-col w-screen h-screen '>
      <HeaderLoggedIn />
      <div className='  lg:w-1/3 h-full right float-right hidden lg:block'>
        <div className='h-96 mt-4 mx-6 border border-no-hover-color bg-white sm:rounded-md '>
          4
        </div>
      </div>

      <div className='flex lg:w-2/3 '>
        <div className='h-16 my-4 border border-no-hover-color bg-white rounded-sm w-full sm:rounded-md sm:mx-6 lg:mx-0 lg:ml-6'>
          1test
          <button
            onClick={() => {
              setButtonn(true);
            }}
          >
            asdfasdfasd
          </button>
          {buttonn && <APICalls />}
        </div>
        {/* <div className='hidden h-16 my-4 sm:w-1/3 lg:block'></div> */}
      </div>

      <div className=' flex lg:w-2/3 w-screen h-full '>
        <div className='lg:w-full w-full h-full  sm:mx-6 lg:mx-0 lg:ml-6  '>
          {/* <div className='flex w-full justify-center items-center   '>
            <InputField
              buttonClickHandler={buttonClickHandler}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              setPostInput={setPostInput}
              postInput={postInput}
            />
          </div> */}
          <PostFeed posts={posts} setPosts={setPosts} />
        </div>
      </div>
    </div>
  );
}
