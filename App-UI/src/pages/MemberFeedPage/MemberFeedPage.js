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
    e.preventDefault();
    if (postBody === "") {
      return alert("Fields cannot be empty.");
    } else {
      try {
        setIsWaiting(true);
        const { username } = await Auth.currentAuthenticatedUser();

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
        <div className='flex h-16 my-4 place-items-center border-no-hover-color bg-white rounded-sm w-full border sm:rounded-md sm:mx-6 lg:mx-0 lg:ml-6'>
          <span className='w-1/3 '>
            {/* <img
              className=' h-10 rounded-full mr-4 inline-block'
              src='App-UI/src/assets/hero.webp'
              alt='profile'
            /> */}
          </span>
          <span className='flex w-4/5 h-full place-items-center'>
            <PostForm
              submitPostHandler={submitPostHandler}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          </span>
          <span className='w-1/3'></span>
        </div>
      </div>
      <div className='flex w-full lg:w-2/3 h-full '>
        <div className='h-full w-full sm:mx-6 lg:ml-6 lg:mr-0'>
          <PostFeedLoop isWaiting={isWaiting} posts={posts} />
        </div>
      </div>
    </div>
  );
}
