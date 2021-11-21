import React, { useState, useEffect } from "react";

import Amplify, { API } from "aws-amplify";
import awsconfig from "./../../aws-exports";
Amplify.configure(awsconfig);
API.configure(awsconfig);

export default function APICalls() {
  useEffect(() => {
    try {
      API.get("disasterAPI", "/posts/id").then(res => console.log("ello", res));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <div></div>;
}

// https://b1pqsbd4ri.execute-api.us-east-2.amazonaws.com/dev/
