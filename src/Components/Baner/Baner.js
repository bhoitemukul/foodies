import React from "react";
import "./Baner.css";
import baner1 from "../../Assets/Baner/banner1.jpg";
import baner2 from "../../Assets/Baner/banner2.png";
import baner3 from "../../Assets/Baner/banner3.jpg";
import baner4 from "../../Assets/Baner/banner4.jpg";
import baner5 from "../../Assets/Baner/banner5.jpg";

export const Baner = () => {
  return (
    <div>
      {/* <div className="under-line"></div> */}
      {/* <div className='main-tags'>Get Offer</div> */}
      <div className="height"></div>
      <div className="height"></div>
      <div className="banner-container">
        <div className="banner-container-image">
          <img id="bn1" src={baner1} alt="" />
        </div>
        <div className="banner-container-image">
          <img id="bn1" src={baner2} alt="" />
        </div>
        <div className="banner-container-image">
          <img id="bn1" src={baner3} alt="" />
        </div>
        <div className="banner-container-image">
          <img id="bn1" src={baner4} alt="" />
        </div>
        <div className="banner-container-image">
          <img id="bn1" src={baner5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Baner;
