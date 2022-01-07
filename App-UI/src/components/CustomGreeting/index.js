import React, { useState, useEffect } from "react";

import Amplify from "aws-amplify";
import "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [authState, user]);

  return authState === AuthState.SignedIn && user ? (
    <div className='App '>
      <div className='text-white'>Hello, {user.username}</div>
    </div>
  ) : null;
};
export default AuthStateApp;
