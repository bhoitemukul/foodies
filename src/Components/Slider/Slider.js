import React from "react";
import "./Slider.css";
import pizza from "../../Assets/pizza.png";
import closeimg from "../../Assets/close.png";
import mushroom from "../../Assets/mushroom.png";
import onion from "../../Assets/onion.png";
import tomato from "../../Assets/tomato.png";
import asparagus from "../../Assets/asparagus.png";
import artichokes from "../../Assets/artichoke.png";
import m1 from "../../Assets/Mushroom/m1.png";
import m2 from "../../Assets/Mushroom/m2.png";
import m3 from "../../Assets/Mushroom/m3.png";
import m4 from "../../Assets/Mushroom/m4.png";
import m5 from "../../Assets/Mushroom/m5.png";
import m6 from "../../Assets/Mushroom/m6.png";
import m7 from "../../Assets/Mushroom/m7.png";
import t1 from "../../Assets/tomato/t1.png";
import t2 from "../../Assets/tomato/t2.png";
import t3 from "../../Assets/tomato/t3.png";
import t4 from "../../Assets/tomato/t4.png";
import t5 from "../../Assets/tomato/t5.png";

export const slider = () => {
  function opentray() {
    document.getElementById("tray").style.height = "100vh";
    document.getElementById("tray").style.padding = "2.5%";
    document.getElementById("tray").style.top = "0px";
    document.getElementById("tray").style.left = "2px";
  }

  function closeray() {
    document.getElementById("tray").style.height = "0";
    document.getElementById("tray").style.padding = "0%";
  }

  function firsttopping() {
    var topping = document.getElementById("m1");

    if (topping.style.display == "none") {
      topping.style.display = "block";
    } else {
      topping.style.display = "none";
    }
  }

  function secondtopping() {
    var topping = document.getElementById("t1");

    if (topping.style.display == "none") {
      topping.style.display = "block";
    } else {
      topping.style.display = "none";
    }
  }

  function GiSlicedMushroom(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M204.6 24.12c-17.8.08-37.6 2.86-59.4 8.64C81.16 49.71 49.62 88.08 34.29 129.2c-15.33 41-13.41 85.2-7.88 109.7 5.51 24.5 22.95 34.8 42 38.3 9.53 1.7 19.28 1.3 27.03-.4 7.76-1.6 13.26-5.1 14.46-6.7 9.6-12.2 10.1-18.6 7.4-25.6-2.7-7-10.9-15.4-22.13-25.1h-.1l-.1-.1c-5.31-4.7-7.02-13.3-4.49-19 2.52-5.7 6.95-9.1 11.72-11.6 4.9-2.5 10.3-4 16.2-3.4 5.9.6 12.8 4.2 15.9 10.8 30 63.8 28.5 132 35 196.6.1 1.6.3 2.1 2.9 3.5s7.6 2.7 13.9 3.1c12.6.8 30.5-1.7 47.5-6.8 17-5 33.5-12.5 43.6-20.5 5.1-4 8.6-8 10.1-11.2 1.6-3.3 1.7-5.3.5-8.3-12.7-30.6-23.6-62.3-32.3-94.9 0-.1.1-.3.1-.5h.1c.1-.5.1-.4-.6-1.1-7.5-28.2-13.4-57.2-17.4-86.7v-.1c-1.1-7.9 1.8-15.6 6.7-20.1 5-4.6 11.2-6.5 17.2-6.6 6-.2 12.2 1.4 17.1 6 4.9 4.6 7.1 12.8 4.9 20.2v.1c-5.2 17.7-6.2 29.3-4.8 35.5 1.5 6.3 4 8.7 11.5 11.7 3.1 1.2 8 1 14.2-1.8 6.3-2.8 13.3-8 19.5-14.5 12.2-13 20.2-31 17.8-43.4-10.1-51.9-31.2-90.01-63-111.51-19.9-13.44-44.4-20.8-74.2-20.67zM353.2 126.9c2.4 8.3 4.5 17 6.2 26 4.2 21.5-7.3 43.3-22.4 59.2-7.5 7.9-16 14.4-25.1 18.5-9 4.1-19 5.9-28.2 2.2-8.4-3.4-15.7-9.2-19.7-17.2 2.4 11.4 5.1 22.7 8 34 .8 1.7 1.3 3.6 1.5 5.6 8.4 31 18.8 61.2 30.9 90.5 3.2 7.6 2.4 16-.8 22.9-3.3 6.8-8.8 12.5-15.3 17.6-13 10.2-31 18.1-49.6 23.6-12.9 3.8-26.1 6.4-38.2 7.3-4.8 7.8-9.5 15.5-14 23.2v.1c-.8 1.3-.9 1.7.4 4.4 1.3 2.8 4.7 6.8 9.7 10.9 10 8.2 26.3 16.7 43.4 22.8 17 6.1 35.1 9.8 48.2 9.4 6.6-.1 11.8-1.4 15-3 3.2-1.7 4.4-3.2 5.1-6.3v-.1c14.4-60.8 35.9-121 66.5-178.1 3.8-7.1 10.8-11.6 17.5-12.4 6.7-.7 12.9 1.5 17.8 4.9 5 3.5 9.2 8.4 10.5 15 1.4 6.5-1.6 14.6-7.8 19.3v.1h-.1c-14.8 11.2-22.4 20-24.8 25.8-2.5 5.9-1.8 9.3 2.7 16.2 1.8 2.9 6.1 5.7 13 7.1 6.8 1.5 15.7 1.5 24.6-.1 17.8-3.2 35-13 40.2-24.3 22.3-48.1 27.3-91.3 13.6-127.7-13.6-36.4-46.3-67.2-103.4-89.3h-.1c-8.7-3.4-17.1-6.1-25.3-8.1z" />
      </svg>
    );
  }

  function GiTomato(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M269 24.54c-3.1.11-5.7 0-7.6.21-2.8.25-4.7.45-7.2 2.23l-1 69.32c3 1.18 6.4 2.3 9.7 2.51 4.1.3 6.8-.21 9.2-2.41zm-103.4 37.9c.1 5.95.3 11.01 1.5 14.14 2.3 5.22 7 9.88 26 13.92l22.5 4.78-19.5 11.82c-16.5 10.1-35.2 19.4-51.5 26.5 6.2.7 12.3 1.4 18.2 1.4 17.8-.1 34.6-3.9 55.3-18.1L234 106l.4-24.35c-25.5-5.62-46.5-11.68-68.8-19.21zm181.2 6.49c-19.5 6.69-34.4 10.97-56.4 14.16l.9 18.81-1.7 2.5c-6.8 10-18.4 13.3-27.9 12.7-9.5-.6-17.6-3.9-23.4-7.6l-3.2-2.1-2.2 18c-1.9 17.1-2.1 28.3-5.2 42.4 14.6-10.4 24.4-18.9 36.5-37.3l7.2-10.7 8.1 10c10.9 13 28.8 22.9 48.5 29-5.7-6.5-10.9-14.5-12-25l-1.4-14.1 13.9 4.6c20.6 6.6 26.9 6.1 33.9 3.7 2.9-.9 6.7-2.6 10.6-4.5l-80.7-27.61 27.3-8.15c14.2-4.24 20.9-9.1 24.6-13.94 1-1.5 1.9-3.14 2.6-4.87zM405.5 132l-1.8.4c-17.4 4.2-24.3 9.5-35 13.1-7.4 2.3-15.6 2.8-26.7.9.4.6 1 1.2 1.5 1.8 5 5.5 12.2 11.6 18.8 20.2l13.2 17.2-21.9-2.6c-29.1-3.5-59.4-13.9-80.3-32.9-16.3 21.4-31.5 30.4-57.2 48.6l-25.8 18.4 11.3-29.1c8.4-21.1 9.3-31.3 10.7-46.3-17.3 8.4-33.7 11.5-49.5 11.6-18.7 0-36.5-3.7-55.2-6.4-.4 0-.8.1-1.2.2-59.84 46.2-68.94 115.5-68.87 150.3.17 94.2 26.73 186.7 222.47 190C408.9 490 475.4 388 474.5 293.2c-.8-60.6-12.3-124.4-69-161.2zm-258.4 34.3c13.2-.2 26.4 4.4 28.3 12.4-92.08 41.9-91.59 97.8-105.21 156.8-11.1-56.8-7.31-122.5 55.21-163.6 5.6-3.8 13.8-5.5 21.7-5.6z" />
      </svg>
    );
  }

  return (
    <div>
      <div className="main-tag">Special Pizzas</div>
      <div className="slider-container">
        <div className="slide1">
          <div className="slide-content">
            <div className="tag">Special Pizza</div>
            <div className="slide-description">
              A Very Special Pizza For You With Extra Toppings If You Want.
            </div>
            <div className="slide-btn" onClick={opentray}>
              Add
            </div>
            <div className="slide-item-price">200 ₹</div>
          </div>
          <div className="slide-image">
            <img src={pizza} alt="" />
          </div>
        </div>
        <div className="slide1">
          <div className="slide-content">
            <div className="tag">Special Pizza</div>
          </div>
          <div className="slide-image">
            <img src={pizza} alt="" />
          </div>
        </div>
        <div className="slide1">
          <div className="slide-content">
            <div className="tag">Special Pizza</div>
          </div>
          <div className="slide-image">
            <img src={pizza} alt="" />
          </div>
        </div>
      </div>
      <div id="tray">
        <div className="closs-tag" onClick={closeray}>
          <img src={closeimg} alt="" />
        </div>
        <div className="tray-image-subcontainer1" id="m1">
          <div id="1" className="addon-images"></div>
          <div id="2" className="addon-images"></div>
          <div id="3" className="addon-images"></div>
          <div id="4" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m2} alt="" />
          </div>
          <div id="7" className="addon-images"></div>
          <div id="8" className="addon-images"></div>
          <div id="9" className="addon-images"></div>
          <div id="10" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="12" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m7} alt="" />
          </div>
          <div id="14" className="addon-images"></div>
          <div id="15" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m5} alt="" />
          </div>
          <div id="17" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m2} alt="" />
          </div>
          <div id="19" className="addon-images"></div>
          <div id="20" className="addon-images"></div>
          <div id="21" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="23" className="addon-images"></div>
          <div id="24" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="26" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m4} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m7} alt="" />
          </div>
          <div id="29" className="addon-images"></div>
          <div id="30" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m6} alt="" />
          </div>
          <div id="32" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m5} alt="" />
          </div>
          <div id="34" className="addon-images"></div>
          <div id="35" className="addon-images"></div>
          <div id="36" className="addon-images"></div>
          <div id="37" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m4} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="40" className="addon-images"></div>
          <div id="41" className="addon-images"></div>
          <div id="42" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m2} alt="" />
          </div>
          <div id="44" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m5} alt="" />
          </div>
          <div id="47" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="49" className="addon-images"></div>
          <div id="50" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m6} alt="" />
          </div>
          <div id="52" className="addon-images"></div>
          <div id="53" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="55" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m7} alt="" />
          </div>
          <div id="57" className="addon-images"></div>
          <div id="58" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m1} alt="" />
          </div>
          <div id="60" className="addon-images"></div>
          <div id="61" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m4} alt="" />
          </div>
          <div id="63" className="addon-images"></div>
          <div id="64" className="addon-images"></div>
          <div id="65" className="addon-images"></div>
          <div id="66" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m5} alt="" />
          </div>
          <div id="68" className="addon-images"></div>
          <div id="69" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m2} alt="" />
          </div>
          <div id="m1" className="addon-images">
            <img src={m6} alt="" />
          </div>
          <div id="72" className="addon-images"></div>
          <div id="73" className="addon-images"></div>
          <div id="74" className="addon-images"></div>
          <div id="75" className="addon-images"></div>
          <div id="76" className="addon-images"></div>
          <div id="77" className="addon-images"></div>
          <div id="m1" className="addon-images">
            <img src={m3} alt="" />
          </div>
          <div id="79" className="addon-images"></div>
          <div id="80" className="addon-images"></div>
          <div id="81" className="addon-images"></div>
          <div id="82" className="addon-images"></div>
          <div id="83" className="addon-images"></div>
          <div id="84" className="addon-images"></div>
          <div id="85" className="addon-images"></div>
          <div id="86" className="addon-images"></div>
          <div id="87" className="addon-images"></div>
          <div id="88" className="addon-images"></div>
        </div>

        <div className="tray-image-subcontainer2" id="t1">
          <div id="1" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="2" className="addon-images"></div>
          <div id="3" className="addon-images"></div>
          <div id="4" className="addon-images">
            <img src={t1} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="7" className="addon-images">
            <img src={t1} alt="" />
          </div>
          <div id="8" className="addon-images"></div>
          <div id="9" className="addon-images"></div>
          <div id="10" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="12" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="14" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="15" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="17" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="19" className="addon-images"></div>
          <div id="20" className="addon-images"></div>
          <div id="21" className="addon-images">
            <img src={t5} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="23" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="24" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="26" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="29" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="30" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="32" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="34" className="addon-images"></div>
          <div id="35" className="addon-images">
            <img src={t5} alt="" />
          </div>
          <div id="36" className="addon-images"></div>
          <div id="37" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="40" className="addon-images"></div>
          <div id="41" className="addon-images"></div>
          <div id="42" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="44" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="47" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="49" className="addon-images"></div>
          <div id="50" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="52" className="addon-images"></div>
          <div id="53" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="55" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="57" className="addon-images">
            <img src={t5} alt="" />
          </div>
          <div id="58" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="60" className="addon-images">
            <img src={t2} alt="" />
          </div>
          <div id="61" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="63" className="addon-images">
            <img src={t1} alt="" />
          </div>
          <div id="64" className="addon-images"></div>
          <div id="65" className="addon-images"></div>
          <div id="66" className="addon-images">
            <img src={t3} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="68" className="addon-images"></div>
          <div id="69" className="addon-images">
            <img src={t4} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="1" className="addon-images"></div>
          <div id="72" className="addon-images"></div>
          <div id="73" className="addon-images"></div>
          <div id="74" className="addon-images"></div>
          <div id="75" className="addon-images"></div>
          <div id="76" className="addon-images"></div>
          <div id="77" className="addon-images"></div>
          <div id="79" className="addon-images">
            <img src={t1} alt="" />
          </div>
          <div id="1" className="addon-images"></div>
          <div id="80" className="addon-images"></div>
          <div id="81" className="addon-images"></div>
          <div id="82" className="addon-images"></div>
          <div id="83" className="addon-images"></div>
          <div id="84" className="addon-images"></div>
          <div id="85" className="addon-images"></div>
          <div id="86" className="addon-images"></div>
          <div id="87" className="addon-images"></div>
          <div id="88" className="addon-images"></div>
        </div>
        <div className="tray-image-container">
          <img src={pizza} alt="" />
        </div>
        <div className="addon-container">
          <div className="addon-content" onClick={firsttopping}>
            <GiSlicedMushroom />
          </div>
          <div className="addon-content" onClick={secondtopping}>
            <GiTomato />
          </div>
        </div>
        <div className="content-container">
          <div className="item-tag">Veg Margherita Pizza</div>
          <div className="item-description">
            A Very Special Pizza For You With Extra Toppings If You Want.
          </div>
          <div className="price-tag">200 ₹</div>
        </div>
      </div>
      <div className="under-line"></div>
    </div>
  );
};

export default slider;
