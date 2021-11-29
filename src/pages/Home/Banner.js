import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-cover d-flex justify-content-center align-items-center">
        <div>
          <h1 className='mb-4 size'>Welcome</h1>
          <h2>I am Jeba Tahsin</h2>
          <h2>I'm a Junior Web Developer</h2>
          <div>
          <a href="https://drive.google.com/file/d/15-wpvdmyxNNuCrs2Ottui_vlALV77BOn/view?usp=sharing"><button className='btn btn-light mt-4'>Download Resume</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
