import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { auth, db, storage } from "~/firebase";

export default function Upload() {
  const [file, setFile] = useState("");
  const [downloadURL, setDownloadURL] = useState();

  const uploadFile = () => {
    const imageName = new Date().getTime() + file.name;
    const storageRef = ref(storage, imageName);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        // setUploadPer(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //   setData((prev) => ({ ...prev, image: downloadURL }));
          setDownloadURL(downloadURL)
        });
      }
    );
  };

  return (
    <div>
      <label htmlFor="file">
        Image: <DriveFolderUploadOutlined className="icon" />
      </label>
      <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={uploadFile}>upload</button>
      <p>{downloadURL && downloadURL}</p>
      <img src={downloadURL} alt="" />
    </div>
  );
}
