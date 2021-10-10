import React, { useState } from "react";
import PostFeed from "../../components/PostFeed";
import InputField from "../../components/PostFeed/InputField";

export default function AccountPage() {
  const [posts, setPosts] = useState([
    {
      post: {
        userProfilePicture: "pic",
        userName: "test",
        content:
          "Someone is missing and needs help. Contact me or balcasdfadsfsf for any infor. thanksasdfasdfasdfasd fasdafsdfasdfas dfasdfasdfasdf",
        tag: "Help/Supplies Needed",
        resolution: "user puts the resolution.",
        likes: "",
        commentCountNumber: "3",
      },
    },
    {
      post: {
        userProfilePicture: "pic",
        userName: "test",
        content: "need food",
        tag: "Lost Dog",
        resolution: "Found!.",
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
          userProfilePicture: "pic",
          userName: "test",
          content: postInput,
          tag: "Lost Dog",
          resolution: "Found!.",
          likes: "222",
          commentCountNumber: "3",
        },
      },
      ...posts,
    ]);
  }

  return (
    <div className='flex-col w-screen h-screen'>
      <div className=' flex w-screen h-screen  w-1'>
        <div className='md:w-1/3 h-full bg-purple-300 hidden'>Column 1</div>
        <div className='md:w-2/3  h-full  w-screen mx-1'>
          <div className='flex w-full justify-center items-center   bg-blue-600'>
            <InputField
              buttonClickHandler={buttonClickHandler}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              setPostInput={setPostInput}
              postInput={postInput}
            />
          </div>
          <PostFeed posts={posts} setPosts={setPosts} />
        </div>
        <div className='md:w-1/3  h-full bg-purple-800 hidden'>Column 3</div>
      </div>
    </div>
  );
}
