import React, { useState } from "react";
import CreatePostForm from "../app/components/CreatePostForm";
import ReactButton from "../app/components/ReactButton";
import axios from "axios";
import urlConfig from "../config/urlConfig";
import { getUser } from "../constants";
const CreatePost = () => {
  const [description, setDescription] = useState("");
  const [fileImage, setFileImage] = useState(null);
  const [imgValue, setImageValue] = useState();
  const onChangeImage = (e) => {
    setFileImage(e.target.files[0]);
    setImageValue(URL.createObjectURL(e.target.files[0]));
  };

  const userData = getUser();
  const userId = userData?.user?.id;
  const userName = userData?.user?.username;
  const onChangeDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const onUpdatePost = async () => {
    try {
      if (fileImage) {
        const data = {
          userId: userId,
          userName: userName,
          description: description,
          image: fileImage,
        };
        const craeteData = await axios.post(
          `${urlConfig.baseUrl}${urlConfig.createPost}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (craeteData.status === 200) {
          setDescription("");
          setImageValue("");
          setFileImage("");
        }
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="createFrom">
      <CreatePostForm
        onChangeImage={onChangeImage}
        onChangeDescription={onChangeDescription}
        imgValue={imgValue}
        reactFormImageDiv={"postImg text-center"}
      />
      <ReactButton
        onClickfn={onUpdatePost}
        btnText={"Create Post"}
        btnClass={"btn btn-danger"}
      />
    </div>
  );
};

export default CreatePost;
