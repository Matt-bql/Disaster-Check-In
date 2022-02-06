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
    const userData = await Auth.currentUserInfo();
    setUser(userData);
  }
  console.log(user);
  return (
    <div>
      {/* {user.attributes.name}
      {user.attributes.email} */}
    </div>
  );
}
