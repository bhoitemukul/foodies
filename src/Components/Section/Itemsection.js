import React from "react";
import "./Itemsection.css";
import pizza from "../../Assets/cat/pizza.jpg";
import bread from "../../Assets/cat/bread.jpg";
import main from "../../Assets/cat/main.jpg";
import soup from "../../Assets/cat/soup.jpg";
import starter from "../../Assets/cat/starter.jpg";
import colddrink from "../../Assets/cat/colddrink.jpg";
import mocktail from "../../Assets/cat/mocktail.jpg";
import rum from "../../Assets/cat/rum.jpg";
import tea from "../../Assets/cat/tea.jpg";
import vodka from "../../Assets/cat/vodka.jpg";
import whisky from "../../Assets/cat/whisky.jpg";
import closeimg from "../../Assets/close.png";
import pizza1 from "../../Assets/pizza/1.jpg";
import pizza2 from "../../Assets/pizza/2.jpg";
import pizza3 from "../../Assets/pizza/3.jpg";
import pizza4 from "../../Assets/pizza/4.jpg";
import pizza5 from "../../Assets/pizza/5.jpg";
import pizza6 from "../../Assets/pizza/6.jpg";
import pizza7 from "../../Assets/pizza/7.png";
import pizza8 from "../../Assets/pizza/8.png";
import pizza9 from "../../Assets/pizza/9.png";
import salad1 from "../../Assets/salad/1.jpg";
import salad2 from "../../Assets/salad/2.jpeg";
import salad3 from "../../Assets/salad/3.jpg";
import salad4 from "../../Assets/salad/4.jpg";
import salad5 from "../../Assets/salad/5.jpg";
import salad6 from "../../Assets/salad/6.jpg";
import salad7 from "../../Assets/salad/7.jpeg";
import salad8 from "../../Assets/salad/8.jpg";
import salad9 from "../../Assets/salad/9.jpeg";

// import { click } from '@testing-library/user-event/dist/click'

export const Itemsection = () => {
  function opdraw(x) {
    var sec1 = document.getElementById("sec1");
    var sec2 = document.getElementById("sec2");
    var sec3 = document.getElementById("sec3");
    var tag1 = document.getElementById("tag1");
    var tag2 = document.getElementById("tag2");
    var tag3 = document.getElementById("tag3");

    if (x == 1) {
      sec1.style.transition = "all 0.5s ease-in-out";
      if (sec1.style.height == "141px") {
        sec1.style.height = "141px  ";
      } else {
        tag2.style.backgroundColor = "none";
        tag2.style.boxShadow = "none";
        tag3.style.boxShadow = "none";
        tag3.style.backgroundColor = "none";
        sec1.style.height = "141px  ";
        sec2.style.height = "0px";
        sec3.style.height = "0px";
      }
    } else if (x == 2) {
      sec2.style.transition = "all 0.5s ease-in-out";
      if (sec2.style.height == "141px") {
        sec2.style.height = "141px ";
        tag2.style.backgroundColor = "white";
      } else {
        tag3.style.backgroundColor = "none";
        tag1.style.boxShadow = "none";
        tag3.style.boxShadow = "none";
        sec1.style.height = "0px";
        sec2.style.height = "141px ";
        sec3.style.height = "0px";
      }
    } else if (x == 3) {
      sec3.style.transition = "all 0.5s ease-in-out";
      if (sec3.style.height == "141px") {
        sec3.style.height = "141px ";
        tag3.style.backgroundColor = "white";
      } else {
        tag2.style.backgroundColor = "none";
        tag1.style.boxShadow = "none";
        tag2.style.boxShadow = "none";
        sec1.style.height = "0px";
        sec2.style.height = "0px";
        sec3.style.height = "141px ";
      }
    }
  }
  function openmenu() {
    document.getElementById("menu-container").style.display = "block";
  }

  function closemenu() {
    document.getElementById("menu-container").style.display = "none";
  }

  return (
    <div className="itemsection-container" id="sections">
      <div id="section-wrap">
        <div id="tag1" className="tags" onClick={() => opdraw(1)}>
          <input type="radio" value="Food" id="Food" name="section" />
        </div>
        <label htmlFor="Food">Food</label>

        <div id="tag2" className="tags" onClick={() => opdraw(2)}>
          <input type="radio" value="Beverages" id="Beverages" name="section" />
        </div>
        <label htmlFor="Beverages">Beverages</label>

        <div id="tag3" className="tags" onClick={() => opdraw(3)}>
          <input type="radio" value="Liquor" id="Liquor" name="section" />
        </div>
        <label htmlFor="Liquor">Liquor</label>
      </div>

      <div className="section-container" id="sec1">
        <div className="section-sub-container" id="section-container-1">
          <div className="section-card">
            <a>
              <img src={pizza} alt="" />
            </a>
            <div className="section-card-bg" onClick={openmenu}></div>
            <div className="section-card-tag">Pizza</div>
          </div>
        </div>
        <div className="section-sub-container" id="section-container-3">
          <div className="section-card">
            <a href="#soups">
              <img src={soup} alt="" />
            </a>
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Soups</div>
          </div>
        </div>
        <div className="section-sub-container" id="section-container-2">
          <div className="section-card">
            <img src={starter} alt="" />
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Starter</div>
          </div>
        </div>
        <div className="section-sub-container" id="section-container-3">
          <div className="section-card">
            <img src={main} alt="" />
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Main Course</div>
          </div>
        </div>
        <div className="section-sub-container" id="section-container-3">
          <div className="section-card">
            <img src={bread} alt="" />
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Bread</div>
          </div>
        </div>
      </div>

      <div className="section-container" id="sec2">
        <div className="section-sub-container" id="section-container-1">
          <div className="section-card" id="food">
            <img src={mocktail} alt="" />
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Mocktail</div>
          </div>
        </div>

        <div className="section-sub-container" id="section-container-2">
          <div className="section-card" id="beverage">
            <img src={tea} alt="" />
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Tea</div>
          </div>
        </div>

        <div className="section-sub-container" id="section-container-3">
          <div className="section-card" id="liquor">
            <img src={colddrink} alt="" />
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Cold Drink</div>
          </div>
        </div>
      </div>

      <div className="section-container" id="sec3">
        <div className="section-sub-container" id="section-container-1">
          <div className="section-card" id="food" onClick={() => opdraw(1)}>
            <img src={rum} alt="" />
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Rum</div>
          </div>
        </div>

        <div className="section-sub-container" id="section-container-2">
          <div className="section-card" id="beverage" onClick={() => opdraw(2)}>
            <img src={vodka} alt="" />
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Vodka</div>
          </div>
        </div>

        <div className="section-sub-container" id="section-container-3">
          <div className="section-card" id="liquor" onClick={() => opdraw(3)}>
            <img src={whisky} alt="" />
            <div className="section-card-bg"></div>
            <div className="section-card-tag">Whisky</div>
          </div>
        </div>
      </div>
      <div id="menu-container">
        <div className="menu-close-tag-container">
          <div className="menu-close-tag" onClick={closemenu}>
            Close
          </div>
        </div>
        <div className="category-name-container">
          <div className="category-name-subcontainer active">Pizza</div>
          <div className="category-name-subcontainer">Salad</div>
          <div className="category-name-subcontainer">Soup</div>
          <div className="category-name-subcontainer">Indian Bread</div>
          <div className="category-name-subcontainer">Rice</div>
          <div className="category-name-subcontainer">Dal</div>
          <div className="category-name-subcontainer">Dessert</div>
        </div>
        <div className="menu-item-container">
          <div className="menu-item-tag">
            Pizza
            <div className="under-line"></div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={pizza3} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Margherita</div>
                <div className="menu-item-description">
                  A Very Special Pizza For You With Extra Toppings If You Want.
                  A Very Special Pizza For You With Extra Toppings If You Want
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={pizza1} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Farmer Fresh</div>
                <div className="menu-item-description">
                  A Very Special Pizza For You With Extra Toppings If You Want.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={pizza2} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Meat Ball</div>
                <div className="menu-item-description">
                  A Very Special Pizza For You With Extra Toppings If You Want.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={pizza9} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Chicken Pizza</div>
                <div className="menu-item-description">
                  A Very Special Pizza For You With Extra Toppings If You Want.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={pizza4} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Extra Cheese</div>
                <div className="menu-item-description">
                  A Very Special Pizza For You With Extra Toppings If You Want.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={pizza5} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Jerk Chicken</div>
                <div className="menu-item-description">
                  A Very Special Pizza For You With Extra Toppings If You Want.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={pizza6} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Pork Pizza</div>
                <div className="menu-item-description">
                  A Very Special Pizza For You With Extra Toppings If You Want.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={pizza7} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Mexican Pizza</div>
                <div className="menu-item-description">
                  A Very Special Pizza For You With Extra Toppings If You Want.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={pizza8} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Cheese N Corn</div>
                <div className="menu-item-description">
                  A Very Special Pizza For You With Extra Toppings If You Want.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Category */}
          <div className="menu-item-tag">Salad</div>
          <div className="under-line"></div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={salad1} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Broccoli Salad</div>
                <div className="menu-item-description">
                  A Salad is a Dish Consisting of Mixed, Mostly Natural
                  Ingredients With at Least One Raw Ingredient.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={salad2} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Caesar Salad</div>
                <div className="menu-item-description">
                  A Salad is a Dish Consisting of Mixed, Mostly Natural
                  Ingredients With at Least One Raw Ingredient.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={salad3} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Orzo Salad</div>
                <div className="menu-item-description">
                  A Salad is a Dish Consisting of Mixed, Mostly Natural
                  Ingredients With at Least One Raw Ingredient.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={salad4} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Easy Pasta Salad</div>
                <div className="menu-item-description">
                  A Salad is a Dish Consisting of Mixed, Mostly Natural
                  Ingredients With at Least One Raw Ingredient.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={salad5} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Creamy Salad</div>
                <div className="menu-item-description">
                  A Salad is a Dish Consisting of Mixed, Mostly Natural
                  Ingredients With at Least One Raw Ingredient.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={salad6} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Healthy Taco Salad</div>
                <div className="menu-item-description">
                  A Salad is a Dish Consisting of Mixed, Mostly Natural
                  Ingredients With at Least One Raw Ingredient.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={salad7} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Greek Salad</div>
                <div className="menu-item-description">
                  A Salad is a Dish Consisting of Mixed, Mostly Natural
                  Ingredients With at Least One Raw Ingredient.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={salad8} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Tomato & Avocado Salad</div>
                <div className="menu-item-description">
                  A Salad is a Dish Consisting of Mixed, Mostly Natural
                  Ingredients With at Least One Raw Ingredient.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item-content-container">
              <div className="item-image-container">
                <img src={salad9} />
              </div>
              <div className="item-content">
                <div className="menu-item-tag">Classic Chicken Salad</div>
                <div className="menu-item-description">
                  A Salad is a Dish Consisting of Mixed, Mostly Natural
                  Ingredients With at Least One Raw Ingredient.
                </div>
                <div className="menu-item-price-container">
                  <div className="menu-item-price">₹ 200</div>
                  <div className="menu-add-btn">
                    <div className="add-btn">Add</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </div>
    </div>
  );
};

export default Itemsection;
