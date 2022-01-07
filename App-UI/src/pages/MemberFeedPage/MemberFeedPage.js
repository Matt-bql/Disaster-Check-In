// Hooks
import React, { useState, useEffect } from "react";
// Components
import PostFeedLoop from "../../components/PostFeed/PostFeedLoop";
import PostForm from "../../components/PostForm/PostForm";
import UserProfilePanel from "../../components/UserProfilePanel/UserProfilePanel";
// Libraries
// import { v4 as uuidv4 } from "uuid";
import Amplify, { API, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
// Using AWS
Amplify.configure(awsconfig);
API.configure(awsconfig);

export default function MemberFeedPage() {
  const [postBody, setPostBody] = useState("");
  const [posts, setPosts] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  // Sorting posts by time posted.
  function compare(a, b) {
    // const copyy = [...posts]
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
    return 0;
  }

  async function getPosts() {
    try {
      setIsWaiting(true);
      const postsFetch = await API.get("disapi", "/posts/");
      const postsSort = postsFetch.sort(compare);

      setPosts(postsSort);
      setIsWaiting(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function submitPostHandler(e) {
    if (postBody === "") {
      alert("Fields cannot be empty.");
      return;
    } else {
      try {
        setIsWaiting(true);
        const { username } = await Auth.currentAuthenticatedUser();
        e.preventDefault();

        const apiName = "disapi";
        const path = "/posts/";
        const myInit = {
          body: {
            id: Date.now().toLocaleString(),
            datePosted: new Date().toLocaleDateString(),
            postedBy: username,
            body: postBody,
          },
        };
        setPostBody("");
        await API.post(apiName, path, myInit);
        setIsWaiting(false);
      } catch (err) {
        console.log("error submitting post to database.", err);
      } finally {
        getPosts();
      }
    }
  }

  return (
    <div className='flex-col w-screen min-h-screen '>
      <div className='lg:w-1/3 h-full right float-right hidden lg:block'>
        <div className='h-96 mt-4 mx-6 border border-no-hover-color bg-white sm:rounded-md '>
          {/* <UserProfilePanel /> */}
        </div>
      </div>
      <div className='flex lg:w-2/3 '>
        <div className='flex h-12 my-4 place-items-center border-no-hover-color bg-white rounded-sm w-full border sm:rounded-md sm:mx-6 lg:mx-0 lg:ml-6'>
          <span className='w-1/4'>
            <img
              className=' h-10 rounded-full mr-4 inline-block'
              src='App-UI/src/assets/hero.jpg'
              alt='profile'
            />
          </span>
          <span className='flex w-3/4 h-full place-items-center'>
            <PostForm
              submitPostHandler={submitPostHandler}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          </span>
          <button className='border-2 w-1/4 '>Link</button>
        </div>
      </div>
      <div className=' flex lg:w-2/3 w-screen h-full '>
        <div className='lg:w-full w-full h-full  sm:mx-6 lg:mx-0 lg:ml-6  '>
          <PostFeedLoop isWaiting={isWaiting} posts={posts} />
        </div>
      </div>
    </div>
  );
}
