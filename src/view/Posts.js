import { useCallback, useEffect, useState } from "react";
import ReactCard from "../app/components/ReactCard.js";
import MainLayout from "../layout/MainLayout";
import axios from "axios";
import urlConfig from "../config/urlConfig.js";

const Posts = () => {
  const [postData, setPostData] = useState([]);
  const token = localStorage.getItem("token");
  const fetchPostData = useCallback(async () => {
    try {
      const data = await axios.get(
        `${urlConfig.baseUrl}${urlConfig.getAllPost}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const resData = await data.data;
      setPostData(resData.data);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);
  return (
    <MainLayout>
      <div className="container">
        <div className="row mt-5 row-gap-3">
          {postData?.map((ele, index) => (
            <div className="col-4" key={index}>
              <ReactCard
                key={ele._id}
                title={ele.userName}
                imgSrc={ele.image}
                description={ele.description}
                mainCardDiv={"postCardDiv"}
                cardDescription={"postCadrDescr"}
                cardTitleDiv={"postCardTitle"}
              />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Posts;
