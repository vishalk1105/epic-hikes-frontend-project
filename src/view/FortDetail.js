import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import FortData from "../data/Fort.json";
import GoogleMap from "../app/components/GoogleMap";

const FortDetail = () => {
  const [fortData, setFortData] = useState({});
  const { id } = useParams();

  const getFortData = useCallback(async () => {
    const data = FortData["Fort Name"]?.find((ele) => ele.Name === id);
    setFortData(data);
  }, [id]);
  console.log(fortData, "data");
  useEffect(() => {
    getFortData();
  }, [getFortData]);

  return (
    <MainLayout>
      <div className="container mb-4 d-flex">
        <div className="">
          <div
            className="fortDataDiv"
            style={{ textAlign: "center", boxSizing: "content-box" }}
          >
            <img
              src={fortData.Image}
              alt="Fort"
              style={{ maxWidth: "600px", maxHeight: "600px" }}
            />
            <h3 className="mt-3 text-uppercase">{fortData.Name} Fort</h3>
          </div>
          <div>
            <p>
              <strong>
                <em>Location: </em>
              </strong>
              {fortData.Location}
            </p>
            <strong>
              <em>Description:</em>{" "}
            </strong>
            <p className="fortDataDescription">{fortData.Description}</p>
          </div>
        </div>
        <div className="googoleMapDiv">
          <GoogleMap place={fortData.Name} />
        </div>
      </div>
    </MainLayout>
  );
};

export default FortDetail;
