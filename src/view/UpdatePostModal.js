import { memo, useState } from "react";
import ReactButton from "../app/components/ReactButton";
import axios from "axios";
import urlConfig from "../config/urlConfig";
import CreatePostForm from "../app/components/CreatePostForm";
import { getUser } from "../constants";
const UpdatePostModal = memo(
  ({ modalId, title, descr, imgSrc, getUserPosts }) => {
    const [description, setDescription] = useState(descr);
    const [fileImage, setFileImage] = useState(null);
    const [imgValue, setImageValue] = useState(imgSrc);
    const onChangeImage = (e) => {
      setFileImage(e.target.files[0]);
      setImageValue(URL.createObjectURL(e.target.files[0]));
    };
    const userData = getUser();
    const userId = userData?.user?.id;

    const onChangeDescription = (e) => {
      e.preventDefault();
      setDescription(e.target.value);
    };

    const onUpdatePost = async () => {
      try {
        if (fileImage) {
          const data = {
            description: description,
            image: fileImage,
          };
          const updateData = await axios.put(
            `${urlConfig.baseUrl}${urlConfig.updatePostByID}/${userId}/${modalId}`,
            data,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          getUserPosts();
        } else {
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <CreatePostForm
                value={description}
                onChangeDescription={onChangeDescription}
                imgValue={imgValue}
                onChangeImage={onChangeImage}
                reactFormImageDiv={"upadetImageClass text-center"}
                createFormMainDiv={"createFormMainDiv"}
              />
            </div>
            <div className="modal-footer">
              <ReactButton
                btnText={"Close"}
                btnClass={"btn btn-outline-secondary"}
                dataBsDismiss="modal"
              />
              <ReactButton
                btnText={"Update"}
                btnClass={"btn btn-danger"}
                onClickfn={onUpdatePost}
                dataBsDismiss="modal"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default UpdatePostModal;
