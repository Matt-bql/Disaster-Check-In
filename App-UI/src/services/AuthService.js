import React from "react";
import {
  AmplifySignUp,
  AmplifySignIn,
  AmplifySignOut,
  withAuthenticator,
  AmplifyAuthenticator,
  AmplifyGreetings,
} from "@aws-amplify/ui-react";
export default function AuthService() {
  return (
    <div>
      <AmplifyGreetings></AmplifyGreetings>
    </div>
  );
}
