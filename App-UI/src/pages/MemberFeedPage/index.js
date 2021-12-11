// Hooks
import React, { useState, useEffect } from "react";
// Components
import PostFeedLoop from "../../components/PostFeed/PostFeedLoop";
import PostForm from "../../components/PostForm/PostForm";
// Libraries
import { v4 as uuidv4 } from "uuid";
import Amplify, { API, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
// Using Aws
Amplify.configure(awsconfig);
API.configure(awsconfig);

export default function MemberFeedPage() {
  const [postBody, setPostBody] = useState("");
  const [posts, setPosts] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      setIsWaiting(true);
      const postFetch = await API.get("disapi", "/posts/");
      console.log(postFetch, "wow");
      setPosts(postFetch);
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
            id: uuidv4(),
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
          4
        </div>
      </div>
      <div className='flex lg:w-2/3 '>
        <div className='h-16 my-4 border border-no-hover-color bg-white rounded-sm w-full sm:rounded-md sm:mx-6 lg:mx-0 lg:ml-6'>
          <PostForm
            submitPostHandler={submitPostHandler}
            postBody={postBody}
            setPostBody={setPostBody}
          />
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
