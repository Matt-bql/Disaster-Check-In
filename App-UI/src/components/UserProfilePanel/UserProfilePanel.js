// Hooks
import React, { useEffect, useState } from "react";
import Amplify, { API, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
// Using AWS
Amplify.configure(awsconfig);
API.configure(awsconfig);

export default function UserProfilePanel({ posts }) {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    getAuthUserData();
  }, []);

  async function getAuthUserData() {
    const { attributes } = await Auth.currentAuthenticatedUser();
    const { username } = await Auth.currentAuthenticatedUser();
    setUser(attributes);
    setUsername(username);
  }

  console.log(username);
  console.log(posts);
  return (
    <div className='h-full w-full p-4'>
      <div className=' flex h-1/3'>
        <div className='w-1/3 border'>PIC</div>
        <div className=' w-2/3 border'>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
      <div className='h-2/3 '>
        <h2 className=' flex h-1/6 items-center justify-center '>
          Your Posts:
        </h2>
        <div className='h-5/6 border'>
          {posts.map(post => {
            return (
              <div key={post.id} className='w-ful '>
                {post.postedBy === username ? (
                  <p className='my-2 cursor-pointer items-center border-b py-2 hover:bg-gray-200'>
                    {post.body}
                  </p>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
