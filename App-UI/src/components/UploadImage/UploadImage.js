import React, { useState } from "react";

import { Storage } from "aws-amplify";

export default function UploadImage() {
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [response, setResponse] = useState("");

  function uploadImage() {
    try {
      Storage.put(
        `userimages/${this.upload.files[0].name}`,
        this.upload.files[0],
        { contentType: this.upload.files[0].type }
      ).then(result => {
        this.upload = null;
        setResponse(this.upload.files[0].type);
      });
    } catch (err) {
      console.log(setResponse(`Cannot upload file: ${err}`));
    }
  }

  return (
    <div>
      <h2>hello</h2>
      <input
        type='file'
        accept='image/png, image/jped'
        ref={ref => (this.upload = ref)}
        onChange={e =>
          setImageFile(
            this.upload.files[0],
            setImageName(this.upload.files[0].name)
          )
        }
      />
      <input value={imageName} placeholder='Select file' />
      <button
        onClick={e => {
          this.upload.value = null;
          this.upload.click();
        }}
        // loading={uploading}
      >
        Browse
      </button>
      <button onClick={uploadImage}>Upload</button>
      {!!response && <div>{response}</div>}
    </div>
  );
}
