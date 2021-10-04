// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// // import LoginForm from "../LoginForm";
// import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
// export default function LoginModal({ setIsButtonClicked }) {
//   const node = useRef();
//   const handleClick = e => {
//     if (node.current.contains(e.target)) {
//       // inside click
//       return;
//     }
//     // outside click
//     setIsButtonClicked(false);
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClick);

//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//     };
//   }, []);

//   return null;
//   // <div ref={node} className='flex fixed h-screen top-1 z-50  sm:px-6 lg:px-8'>
//   //   <AmplifyAuthenticator />
//   // </div>
//   // );
// }
