import { React, useState, useEffect } from "react";
import "./Cards.css";
import Arrowr from "../../Assets/r.png";
import Arrowl from "../../Assets/l.png";
import image from "../../Assets/cat/bread.jpg";
import g1 from "../../Assets/gallery/1.jpg";
import g2 from "../../Assets/gallery/2.jpg";
import g3 from "../../Assets/gallery/3.jpg";
import g4 from "../../Assets/gallery/4.jpg";
import g5 from "../../Assets/gallery/5.jpg";
import g6 from "../../Assets/gallery/6.jpg";

export default function Cards() {
  const [activeCard, setActiveCard] = useState(1);

  function nextbtn() {
    let newActiveCard = activeCard + 1;
    if (activeCard == 6) newActiveCard = 1;
    setActiveCard(newActiveCard);
  }

  function prevbtn() {
    let newActiveCard = activeCard - 1;
    if (activeCard == 1) newActiveCard = 6;
    setActiveCard(newActiveCard);
  }

  return (
    <div>
      <div className="main-tag">Gallery</div>
      <div className="cards-main-container" id="gallery">
        <div className="cards-sub-container">
          <div className="btn" onClick={prevbtn}>
            <img src={Arrowl} />
          </div>
        </div>
        <div className="cards-sub-container2">
          <div className={`card card1 ${activeCard == 1 ? "active" : ""}`}>
            <img src={g1} />
          </div>
          <div className={`card card2 ${activeCard == 2 ? "active" : ""}`}>
            <img src={g2} />
          </div>
          <div className={`card card3 ${activeCard == 3 ? "active" : ""}`}>
            <img src={g3} />
          </div>
          <div className={`card card4 ${activeCard == 4 ? "active" : ""}`}>
            <img src={g4} />
          </div>
          <div className={`card card5 ${activeCard == 5 ? "active" : ""}`}>
            <img src={g5} />
          </div>
          <div className={`card card6 ${activeCard == 6 ? "active" : ""}`}>
            <img src={g6} />
          </div>
        </div>
        <div className="cards-sub-container">
          <div className="btn" onClick={nextbtn}>
            <img src={Arrowr} />
          </div>
        </div>
      </div>
      <div className="under-line"></div>
    </div>
  );
}

// export default Cards
