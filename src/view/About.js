import React from "react";
import MainLayout from "../layout/MainLayout";
const About = () => {
  return (
    <MainLayout>
      <div className="container">
        <h1 className="about">About</h1>
      </div>

      <div className="container">
        <div className="box-area">
          <div className="single-box">
            <div className="img-area"></div>
            <div className="img-text">
              <span className="header-text">
                <strong>Rushikesh Ghuge</strong>
              </span>
              <div className="line"></div>
              <h3>Software Engineer</h3>
              <p>Persuing PG-DAC From C-Dac, Mumbai</p>
            </div>
          </div>
          <div className="single-box">
            <div className="img-area"></div>
            <div className="img-text">
              <span className="header-text">
                <strong>Vishal Kamble</strong>
              </span>
              <div className="line"></div>
              <h3>Software Engineer</h3>
              <p>Persuing PG-DAC From C-Dac, Mumbai</p>
            </div>
          </div>
          <div className="single-box">
            <div className="img-area"></div>
            <div className="img-text">
              <span className="header-text">
                <strong>Srishti Ravi </strong>
              </span>
              <div className="line"></div>
              <h3>Software Engineer</h3>
              <p>Persuing PG-DAC From C-Dac, Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
