// Hooks
import React, { useState, useEffect } from "react";
// Components
import PostFeedLoop from "../../components/PostFeed/PostFeedLoop";
import PostFormConditionalHandler from "../../components/PostFormConditionalHandler/PostFormConditionalHandler";
import UserProfilePanel from "../../components/UserProfilePanel/UserProfilePanel";
import MemberPageContent from "./MemberPageContent";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";
// Libraries
// import { v4 as uuidv4 } from "uuid";
import Amplify, { API, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
// Using AWS
Amplify.configure(awsconfig);
API.configure(awsconfig);

export default function MemberFeedPage() {
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [currentUserData, setCurrentUserData] = useState("");
  const [isInputClicked, setIsInputClicked] = useState(false);

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
    } finally {
      setPostBody("");
      setPostTitle("");
    }
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
            title: postTitle,
            id: Date.now().toLocaleString(),
            datePosted: new Date().toLocaleDateString(),
            postedBy: currentUserData.username,
            body: postBody,
          },
        };

        // Implementing optimistic UI for faster response.
        const newArr = [myInit.body, ...posts];
        await setPosts(newArr);
        // Posting to DB
        await API.post(apiName, path, myInit);
      } catch (err) {
        console.log("error submitting post to database.", err);
      } finally {
        setPostBody("");
        setPostTitle("");
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
  console.log(isInputClicked);
  return (
    <MemberPageContent
      Panel={<UserProfilePanel posts={posts} />}
      ConditionalHandler={
        <PostFormConditionalHandler
          submitPostHandler={submitPostHandler}
          postBody={postBody}
          setPostBody={setPostBody}
          setPostTitle={setPostTitle}
          setIsInputClicked={setIsInputClicked}
          isInputClicked={isInputClicked}
        />
      }
      FeedLoop={
        <PostFeedLoop
          isWaiting={isWaiting}
          posts={posts}
          currentUserData={currentUserData}
          deletePostHandler={deletePostHandler}
        />
      }
      Form={
        <CreatePostForm
          submitPostHandler={submitPostHandler}
          postBody={postBody}
          setPostBody={setPostBody}
          setPostTitle={setPostTitle}
          setIsInputClicked={setIsInputClicked}
          isInputClicked={isInputClicked}
        />
      }
      isInputClicked={isInputClicked}
      setIsInputClicked={setIsInputClicked}
    ></MemberPageContent>
  );
}
