import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import urlConfig from "../config/urlConfig";
import ReactCard from "../app/components/ReactCard";
import "bootstrap-icons/font/bootstrap-icons.css";
import UpdatePostModal from "./UpdatePostModal";
import ReactModal from "../app/components/ReactModal";
import { getUser } from "../constants";
const UsersPosts = () => {
  const [usersPostData, setUserPostData] = useState([]);
  const [hideModal, setHideModal] = useState(false);
  const [postDelete, setPostDelete] = useState(null);
  const [error, setError] = useState("");
  const userData = getUser();
  const userId = userData?.user?.id;
  const token = localStorage.getItem("token");
  const fetchUserPostData = useCallback(async () => {
    try {
      const data = await axios.get(
        `${urlConfig.baseUrl}${urlConfig.getPostsById}/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resData = await data.data;
      setUserPostData(resData.data);
    } catch (err) {
      setError(err.msg);
      console.log(err);
    }
  }, [userId]);
  useEffect(() => {
    fetchUserPostData();
  }, [fetchUserPostData]);

  const onDeleteFn = async (id) => {
    try {
      const data = await axios.delete(
        `${urlConfig.baseUrl}${urlConfig.deletePost}/${userId}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.status === 200) {
        setHideModal(false);
        fetchUserPostData();
      } else {
        setHideModal(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="row mt-5">
        {usersPostData.length !== 0 ? (
          usersPostData?.map((ele, index) => (
            <div className="col-4" key={index}>
              <div>
                <ReactCard
                  key={ele._id}
                  title={ele.userName}
                  imgSrc={ele.image}
                  readMore={false}
                  description={ele.description}
                  mainCardDiv={"postCardDiv"}
                  cardMainBody={"postCardMainBody"}
                  cardActionBtn={"d-flex align-items-center"}
                  cardActionTitle={
                    <div className="d-flex gap-3">
                      <i
                        data-bs-toggle="modal"
                        data-bs-target={`#delete${ele._id}`}
                        className="bi bi-trash"
                        onClick={() => {
                          setPostDelete(ele._id);
                          setHideModal(true);
                        }}
                      ></i>
                      <i
                        data-bs-toggle="modal"
                        data-bs-target={`#${ele._id}`}
                        className="bi bi-pencil-square"
                      ></i>
                    </div>
                  }
                />
              </div>
              <UpdatePostModal
                descr={ele.description}
                modalId={ele._id}
                title={ele.userName}
                imgSrc={ele.image}
                getUserPosts={fetchUserPostData}
              />
              <ReactModal
                modalId={`delete${ele._id}`}
                onclickFn={() => {
                  onDeleteFn(postDelete);
                }}
                showModal={hideModal}
              />
            </div>
          ))
        ) : (
          <h4 className="text-center text-danger">No Posts</h4>
        )}
      </div>
    </div>
  );
};

export default UsersPosts;
