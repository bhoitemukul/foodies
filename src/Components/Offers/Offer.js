import React from "react";
import "./Offer.css";
import offerimg1 from "../../Assets/offer.png";
import offerimg2 from "../../Assets/offer1.png";
import offerimg3 from "../../Assets/offer2.png";
import offerimg4 from "../../Assets/offer3.png";

export const Offer = () => {
  return (
    <div>
      <div className="under-line"></div>
      <div className="main-tags">Offer</div>
      <div className="offers-container" id="offers">
        <div className="offers-card" data-aos="zoom-out">
          <div className="offers-tag">Get 10% Off</div>
          <div className="offers-under-line"></div>
          <div className="offers-content">Hunger should kick the can!</div>
          <div className="offers-image">
            <img src={offerimg1} />
          </div>
        </div>
        <div className="offers-card" data-aos="zoom-out">
          <div className="offers-tag">Get 30% Off</div>
          <div className="offers-under-line"></div>
          <div className="offers-content">Take a bite out of hunger.</div>
          <div className="offers-image">
            <img src={offerimg2} />
          </div>
        </div>
        <div className="offers-card" data-aos="zoom-out">
          <div className="offers-tag">Get 60% Off</div>
          <div className="offers-under-line"></div>
          <div className="offers-content">
            If you'r always in the mood for food.
          </div>
          <div className="offers-image">
            <img src={offerimg3} />
          </div>
        </div>
        <div className="offers-card" data-aos="zoom-out">
          <div className="offers-tag">Get 40% Off</div>
          <div className="offers-under-line"></div>
          <div className="offers-content">Delight in every bite.</div>
          <div className="offers-image">
            <img src={offerimg4} />
          </div>
        </div>
        <div className="offers-card" data-aos="zoom-out">
          <div className="offers-tag">Get 20% Off</div>
          <div className="offers-under-line"></div>
          <div className="offers-content">Focus on the food</div>
          <div className="offers-image">
            <img src={offerimg1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
