// Hooks
import React, { useEffect, useState } from "react";
// Components
// Libraries
import { Storage } from "aws-amplify";

export default function UserProfilePanel() {
  const [file, setFile] = useState("");
  const [files, setFiles] = useState([]);

  async function listFiles() {
    const files = await Storage.list("");
    setFiles(files);
  }

  async function onChangeHandler(e) {
    try {
      const file = await e.target.files[0];
      const putPhoto = await Storage.put(file.name, file);

      console.log(putPhoto);
    } catch (err) {
      console.log("error posting profile photo.", err);
    }
  }

  async function selectFile(file) {
    const signed = await Storage.get(file.key);
    setFile(signed);
  }

  return (
    <div>
      <input
        type='file'
        accept='image/png, image/jpeg'
        onChange={e => onChangeHandler(e)}
      />
      <div>
        <button onClick={listFiles}>List Files</button>
      </div>
      {files.map(file => (
        <p onClick={() => selectFile(file)}>{file.key}</p>
      ))}
      {file && <img src={file} alt='' style={{ width: 300 }} />}
    </div>
  );
}
