// // Hooks
// import React, { useEffect, useState } from "react";
// // Components
// // Libraries
// import { Storage } from "aws-amplify";
// import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components"; // for retrieving current user data.
// export default function UserProfilePanel() {
//   //for current user state
//   const [authState, setAuthState] = useState();
//   const [user, setUser] = useState();

//   useEffect(() => {
//     return onAuthUIStateChange((nextAuthState, authData) => {
//       setAuthState(nextAuthState);
//       setUser(authData);
//       authData.console.log("nextAuthState", nextAuthState);
//       console.log("authData", authData);
//     });
//   }, []);

//   return authState === AuthState.SignedIn && user ? (
//     <div>
//       <amplify-s3-image
//         path='user.imageUrl'
//         options="{'level': 'private'}"
//       ></amplify-s3-image>
//     </div>
//   ) : (
//     <div>loser</div>
//   );
// }

// // Hooks
// // import React, { useEffect, useState } from "react";
// // // Components
// // // Libraries
// // import { Storage } from "aws-amplify";
// // import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components"; // for retrieving current user data.
// // export default function UserProfilePanel() {
// //   //for current user state
// //   const [authState, setAuthState] = useState();
// //   const [user, setUser] = useState();

// //   const [file, setFile] = useState("");
// //   const [files, setFiles] = useState([]);

// //   async function listFiles() {
// //     const files = await Storage.list("");
// //     setFiles(files);
// //   }

// //   useEffect(() => {
// //     return onAuthUIStateChange((nextAuthState, authData) => {
// //       setAuthState(nextAuthState);
// //       setUser(authData);
// // authData.
// //       console.log("nextAuthState", nextAuthState);
// //       console.log("authData", authData);
// //     });
// //   }, []);
// //   async function onChangeHandler(e) {
// //     try {
// //       const file = await e.target.files[0];
// //       const putPhoto = await Storage.put(file.name, file);

// //       console.log(putPhoto);
// //     } catch (err) {
// //       console.log("error posting profile photo.", err);
// //     }
// //   }

// //   async function selectFile(file) {
// //     const signed = await Storage.get(file.key);
// //     setFile(signed);
// //   }

// //   return authState === AuthState.SignedIn && user ? (
// //     <div>
// //       <input
// //         type='file'
// //         accept='image/png'
// //         onChange={e => onChangeHandler(e)}
// //       />
// //       <div>
// //         <button onClick={listFiles}>List Files</button>
// //       </div>
// //       {files.map((file, i) => (
// //         <p onClick={() => selectFile(file)}>{file.key}</p>
// //       ))}
// //       {file && <img src={file} alt='' style={{ width: 300 }} />}
// //     </div>
// //   ) : (
// //     <div>loser</div>
// //   );
// // }
