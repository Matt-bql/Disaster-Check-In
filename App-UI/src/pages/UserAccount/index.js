import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";

export default function UserAccount() {
  return (
    <div className='w-1'>
      This is your account.
      <AmplifySignOut />
    </div>
  );
}
