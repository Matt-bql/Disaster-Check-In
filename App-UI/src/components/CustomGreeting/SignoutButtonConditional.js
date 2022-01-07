// Hooks
import React, { useState, useEffect } from "react";
//Components
import SignoutLogic from "./SignoutLogic";
// Libraries
import { Link } from "react-router-dom";
import Amplify from "aws-amplify";
//AWS
// import {} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

// * This shows the signout button when logged in, and the default text 'signup/login' button when the user is not signed in.
const AuthStateApp = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className='flex w-full items-baseline'>
      <Link to='/' className='text-base hover:text-red-600 cursor-pointer '>
        Home
      </Link>
      <button
        className='text-base  hover:text-red-600 cursor-pointer '
        onClick={SignoutLogic}
      >
        SignOut
      </button>
    </div>
  ) : (
    <Link
      to='/user-page'
      className='list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer
      pt-2.5 px-2.5'
    >
      Login
    </Link>
  );
};
export default AuthStateApp;
