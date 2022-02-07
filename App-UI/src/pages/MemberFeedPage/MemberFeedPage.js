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
  const [currentUserData, setCurrentUserData] = useState("");
  useEffect(() => {
    getPosts();
    getAuthUserData();
  }, []);

  async function getAuthUserData() {
    const userData = await Auth.currentAuthenticatedUser();
    setCurrentUserData(userData);
  }
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
  function getPostsOptimisticaly() {
    const newArr = [{}, ...posts];
  }
  async function submitPostHandler(e) {
    e.preventDefault();
    if (postBody === "") {
      return alert("Fields cannot be empty.");
    } else {
      try {
        // API load for DB.
        const apiName = "disapi";
        const path = "/posts/";
        const myInit = {
          body: {
            id: Date.now().toLocaleString(),
            datePosted: new Date().toLocaleDateString(),
            postedBy: currentUserData.username,
            body: postBody,
          },
        };

        // Implementing optimistic UI for faster response.
        const newArr = [myInit.body, ...posts];
        setPosts(newArr);
        setPostBody("");

        // Posting to DB
        await API.post(apiName, path, myInit);
      } catch (err) {
        console.log("error submitting post to database.", err);
      }
    }
  }

  async function deletePostHandler(id) {
    try {
      //API load for DB
      const apiName = "disapi";
      const path = "/posts/object/" + id;
      const myInit = {
        body: {
          headers: {},
        },
      };

      // Implementing optimistic UI for faster response.
      const newArr = posts.filter(post => {
        return post.id !== id;
      });
      setPosts(newArr);

      // Deleting post from DB
      await API.del(apiName, path, myInit);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=' min-h-screen  w-screen flex-col '>
      <div className='right float-right hidden h-full lg:block lg:w-1/3'>
        <div className='border-no-hover-color mx-6 mt-4 h-96 border bg-white sm:rounded-md '>
          <UserProfilePanel />
        </div>
      </div>
      <div className='flex lg:w-2/3 '>
        <div className='border-no-hover-color my-4 flex h-16 w-full place-items-center rounded-sm border bg-white sm:mx-6 sm:rounded-md lg:mx-0 lg:ml-6'>
          <span className='w-1/3 '>
            {/* <img
              className=' h-10 rounded-full mr-4 inline-block'
              src='App-UI/src/assets/hero.webp'
              alt='profile'
            /> */}
          </span>
          <span className='flex h-full w-4/5 place-items-center'>
            <PostForm
              submitPostHandler={submitPostHandler}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          </span>
          <span className='w-1/3'></span>
        </div>
      </div>
      <div className='flex h-full w-full lg:w-2/3 '>
        <div className='h-full w-full sm:mx-6 lg:ml-6 lg:mr-0'>
          <PostFeedLoop
            isWaiting={isWaiting}
            posts={posts}
            currentUserData={currentUserData}
            deletePostHandler={deletePostHandler}
          />
        </div>
      </div>
    </div>
  );
}
