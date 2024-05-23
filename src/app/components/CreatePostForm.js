import React from "react";
import ReactInput from "./ReactInput";

const CreatePostForm = ({
  value,
  onChangeDescription,
  imgValue,
  onChangeImage,
  reactFormImageDiv,
  createFormMainDiv,
}) => {
  return (
    <form>
      <div className={`mb-3 ${createFormMainDiv}`}>
        <label htmlFor="recipient-name" className="col-form-label">
          Description:
        </label>
        <ReactInput
          reactInputClassName={"my-2"}
          type="text"
          value={value}
          onChange={(e) => onChangeDescription(e)}
        />

        {imgValue && (
          <img src={imgValue} alt="Current" className={reactFormImageDiv} />
        )}
        <ReactInput
          type={"file"}
          onChange={onChangeImage}
          reactInputClassName={"my-2"}
        />
      </div>
    </form>
  );
};

export default CreatePostForm;
