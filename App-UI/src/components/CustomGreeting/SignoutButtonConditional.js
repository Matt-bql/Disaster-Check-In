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
    <div className='mr-1 flex w-full flex-col items-baseline pb-2 pl-2 sm:mr-6  md:flex-row '>
      <Link to='/' className='text-base hover:text-red-600 md:mr-4 '>
        Home
      </Link>
      <button
        className='mt-1 text-base hover:text-red-600 '
        onClick={SignoutLogic}
      >
        SignOut
      </button>
    </div>
  ) : (
    <Link
      to='/user-page'
      className='flex w-full cursor-pointer list-none px-2.5 pt-2.5 text-base uppercase
      hover:text-red-600 md:mr-5'
    >
      Login
    </Link>
  );
};
export default AuthStateApp;
