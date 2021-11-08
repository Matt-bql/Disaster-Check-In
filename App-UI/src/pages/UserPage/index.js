import React, { useState } from "react";
import PostFeed from "../../components/PostFeed";
import InputField from "../../components/PostFeed/InputField";
import CustomGreeting from "../../components/CustomGreeting";

export default function AccountPage() {
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
      <div className=' flex w-screen h-full  '>
        <div className='w:2/3  h-full  sm:mx-6   '>
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
        <div className='md:w-1/3  h-full bg-purple-800 hidden lg:block'>
          Column 2
        </div>
      </div>
    </div>
  );
}
