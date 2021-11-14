import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifyGreetings,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <button className='bg-gray-600'>
      <AmplifySignOut></AmplifySignOut>
    </button>
  ) : (
    <Link
      to='/user-page'
      className='list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
    >
      Login/Signup
    </Link>
  );
};
export default AuthStateApp;
