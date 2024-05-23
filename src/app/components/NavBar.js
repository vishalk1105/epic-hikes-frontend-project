import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, navBarMenu } from "../../constants";
import logo from "../../assets/logo/logo3.jpg";
const NavBar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const userData = getUser();
  const userName = userData?.user?.username;
  return (
    <nav className="navbar navbar-expand-lg justify-content-between bg-dark fixed-top text-white px-4 py-2 ">
      <div className="container-fluid">
        <div className="logoName">
          <span>
            <img className="logo" src={logo} alt=" " />
          </span>
          Epic Hikes
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-center g-5"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav gap-5">
            {navBarMenu.map((ele) => {
              return (
                <li
                  className="nav-item"
                  role="button"
                  id={ele.key}
                  key={ele.key}
                >
                  <Link className="link text-decoration-none" to={ele.path}>
                    {ele.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="navbar-nav gap-5">
            <li className="nav-item profileDiv" role="button">
              <div className="dropdown">
                <div
                  className="dropdown-toggle"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hello, {userName}
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="text-dark">
                    <Link
                      className="dropdown-item text-decoration-none text-dark"
                      to={"/profile"}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="" role="button" onClick={handleLogOut}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
