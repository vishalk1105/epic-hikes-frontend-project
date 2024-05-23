import ReactCard from "../app/components/ReactCard";
import ReactCarousal from "../app/components/ReactCarousal";
import { homeBanner } from "../constants";
import MainLayout from "../layout/MainLayout";
import FortData from "../data/Fort.json";

const Home = () => {
  return (
    <MainLayout>
      <div className="banner">
        <ReactCarousal data={homeBanner} bannerOuterDivClss="bannerDiv" />
      </div>
      <div className="container">
        <h2 className="text-center mt-4 fst-italic">Explore Forts</h2>
        <div className="fortDiv">
          <div className="my-4 row row-gap-3">
            {FortData["Fort Name"].map((ele, index) => (
              <div className="col-3" key={index}>
                <ReactCard
                  key={ele.id}
                  imgSrc={ele.Image}
                  cardImgClass={"fortCardImg"}
                  mainCardDiv={"fortCardDiv"}
                  readMore={true}
                  title={ele.Name}
                  pagePath={`/${ele.Name}`}
                  location={ele.Location}
                  cardTitleDiv={"homecardTitleDiv"}
                  cardLocationDiv={"homeCardLocDiv"}
                  knowMoreBtnClass={"homeBtnClass "}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
