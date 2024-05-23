import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../view/Home";
import Events from "../view/Events";
import Posts from "../view/Posts";
import FortDetail from "../view/FortDetail";
import Profile from "../view/Profile";
import Login from "../view/Login";
import SignUp from "../view/SignUp";
import PrivateRoute from "./PrivateRoute";
import About from "../view/About";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<FortDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
