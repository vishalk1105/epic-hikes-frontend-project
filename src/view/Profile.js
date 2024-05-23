import MainLayout from "../layout/MainLayout";
import UsersPosts from "./UsersPosts";
import CreatePost from "./CreatePost";
const Profile = () => {
  return (
    <MainLayout>
      <div className="container mt-5">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Posts
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Create Post
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <UsersPosts />
          </div>

          <div
            className="tab-pane fade text-center craetePostDiv"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <CreatePost />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
