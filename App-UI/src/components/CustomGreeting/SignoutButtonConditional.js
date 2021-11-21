import React, { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";

import SignoutLogic from "./SignoutLogic";

import Amplify from "aws-amplify";
import {} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

// * This shows the signout button when logged in, and the default text 'signup/login' button when the user is not signed in.
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
    <button
      className='list-none md:mr-5 flex w-full text-sm uppercase hover:text-red-600 cursor-pointer
    pt-2.5 pb-1 px-2.5'
      onClick={SignoutLogic}
    >
      SignOut
    </button>
  ) : (
    <Link
      to='/user-page'
      className='list-none md:mr-5 flex w-full text-sm uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
    >
      Login/Signup
    </Link>
  );
};
export default AuthStateApp;
