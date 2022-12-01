import React, { useEffect, useState } from "react";
import "./Digitel.css";
import off from "../../../src/Assets/off.gif";
import on from "../../../src/Assets/on.gif";
import { getElementError } from "@testing-library/react";
// import randomColor from "randomcolor";

function Digitel() {
  const [color, setColor] = useState("transparent");
  const [bulbState, setBulbState] = useState(off);
  const [bgChange, setBgChange] = useState("digitel-content-container");

  function changeClass() {
    if (bulbState == off) {
      setBulbState(on);
      setColor("black");
      setBgChange("digitel-new-container");
    } else {
      setBulbState(off);
      setColor("transparent");
      setBgChange("digitel-content-container");
    }
  }

  return (
    <div className={"main-container"}>
      <div className="image-container">
        <div className="image-sub-container">
          <img src={bulbState} id="bulb1" />
        </div>
      </div>
      <div className={bgChange}>
        <div className="digitel-content" style={{ color: color }}>
          Hello Dear..... On Your First Order Get 60% Discount And Also Free
          Delivery..♥
        </div>
      </div>
      <div className="offers-btn" onClick={changeClass}>
        Explore Offer
      </div>
    </div>
  );
}
export default Digitel;

// function bright() {
//     console.log('inside bright function 3')
//     const element = document.getElementById('mukul');
//     if (window.scrollY >= 800) {
//         element.style.opacity = Number(element.style.opacity) + 0.01;
//     } else {
//         element.style.opacity = 0.01;
//     }
// }

// window.addEventListener("scroll", bright);
