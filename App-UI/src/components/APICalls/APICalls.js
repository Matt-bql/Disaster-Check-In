import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Amplify, { API, Auth } from "aws-amplify";
import awsconfig from "./../../aws-exports";
Amplify.configure(awsconfig);
API.configure(awsconfig);

export default function APICalls() {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      API.get("disasterApi", "/posts/id").then(res => console.log("ello", res));
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const apiName = "disasterApi";
    const path = "/posts";
    const myInit = {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      body: {
        id: uuidv4(),
        datePosted: Date.now(),
        title: postTitle,
        type: postBody,
      },
    };
    return await API.post(apiName, path, myInit);
    // e.preventDefault();
    // try {
    //   API.post("disasterApi", "/posts", {
    //     body: {
    //       id: uuidv4(),
    //       datePosted: Date.now(),
    //       title: postTitle,
    //       type: postBody,
    //     },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={postTitle}
          placeholder='Post Title'
          onChange={e => setPostTitle(e.target.value)}
        ></input>
        <input
          value={postBody}
          placeholder='Post Content'
          onChange={e => setPostBody(e.target.value)}
        ></input>
        <button>Add Post</button>
      </form>
    </div>
  );
}

// https://b1pqsbd4ri.execute-api.us-east-2.amazonaws.com/dev/
