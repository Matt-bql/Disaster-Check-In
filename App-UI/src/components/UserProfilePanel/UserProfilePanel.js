// Hooks
import React, { useEffect, useState } from "react";
import Amplify, { API, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
// Using AWS
Amplify.configure(awsconfig);
API.configure(awsconfig);

export default function UserProfilePanel() {
  const [user, setUser] = useState("");
  useEffect(() => {
    getAuthUserData();
  }, []);

  async function getAuthUserData() {
    const { attributes } = await Auth.currentAuthenticatedUser();
    setUser(attributes);
  }
  console.log(user);
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      {/* <p>{user.email_verified}</p> */}
    </div>
  );
}
