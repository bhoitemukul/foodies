import React from "react";
import "./Testimonial.css";
import offerimg1 from "../../Assets/chef/c1.png";
import offerimg2 from "../../Assets/chef/c2.png";
import offerimg3 from "../../Assets/chef/c3.png";
import offerimg4 from "../../Assets/chef/c4.png";
import offerimg5 from "../../Assets/chef/c5.png";

export const testimonial = () => {
  return (
    <div>
      <div className="under-line"></div>
      <div className="main-tags">Our Chef's</div>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <div className="testimonial-image-container">
            <div className="testimonial-image">
              <img src={offerimg1} />
            </div>
          </div>
          <div className="testimonial-under-line"></div>
          <div className="testimonial-content">
            " I Have A 12 Year Experience In Hospitality. I Have A Speciality In
            Asian Food. Also We Try New Experiments And People Has Like It.... "
          </div>
          <div className="testimonial-tag">- Mr. Prince</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-image-container">
            <div className="testimonial-image">
              <img src={offerimg2} />
            </div>
          </div>
          <div className="testimonial-under-line"></div>
          <div className="testimonial-content">
            " I Have A 12 Year Experience In Hospitality. I Have A Speciality In
            Asian Food. Also We Try New Experiments And People Has Like It.... "
          </div>
          <div className="testimonial-tag">- Mr. Nadia</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-image-container">
            <div className="testimonial-image">
              <img src={offerimg3} />
            </div>
          </div>
          <div className="testimonial-under-line"></div>
          <div className="testimonial-content">
            " I Have A 12 Year Experience In Hospitality. I Have A Speciality In
            Asian Food. Also We Try New Experiments And People Has Like It.... "
          </div>
          <div className="testimonial-tag">- Mr. Tushar</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-image-container">
            <div className="testimonial-image">
              <img src={offerimg4} />
            </div>
          </div>
          <div className="testimonial-under-line"></div>
          <div className="testimonial-content">
            " I Have A 12 Year Experience In Hospitality. I Have A Speciality In
            Asian Food. Also We Try New Experiments And People Has Like It.... "
          </div>
          <div className="testimonial-tag">- Mr. Amrita</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-image-container">
            <div className="testimonial-image">
              <img src={offerimg5} />
            </div>
          </div>
          <div className="testimonial-under-line"></div>
          <div className="testimonial-content">
            " I Have A 12 Year Experience In Hospitality. I Have A Speciality In
            Asian Food. Also We Try New Experiments And People Has Like It.... "
          </div>
          <div className="testimonial-tag">- Mr. Tanmay</div>
        </div>
      </div>
      <div className="under-line"></div>
    </div>
  );
};

export default testimonial;
