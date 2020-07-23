import React, { Component } from "react";
import "../pages/Shop.scss";
import MenTshirts from "../products/Men/MenTshirts";

export const Shop = () => {
  console.log(MenTshirts.find((i) => i.id == 1));
  const prouductDetails = MenTshirts;
  var id = MenTshirts.find((i) => i.id);
  var title = MenTshirts.find((i) => i.title);
  var cost = MenTshirts.find((i) => i.cost);
  var saving = MenTshirts.find((i) => i.saving);
  var src = MenTshirts.find((i) => i.src);
  var type = MenTshirts.find((i) => i.type);

  const getCard = (card) => {
    // MenTshirts
    var idNum = card.id;
    var name = card.title;
    var price = card.cost;
    var saved = card.saving;
    var image = card.src;
    var gender = card.type;
    return (
      <div className="items">
        <div class="product-card" key={idNum}>
          <div class="badge">Drobe</div>
          <div class="product-tumb">
            <img src={image} alt="" />
          </div>
          <div class="product-details">
            <span class="product-catagory">{gender}</span>
            <h4>
              <a href="">{name}</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>{saved}</small>
                {price}
              </div>
              <div class="product-links">
                <a href="" id="icons">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="" id="icons">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="wrapper">
      <div className="menu">
        <div className="title">MENU</div>
        <ul className="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <section>
        <div id="info">
          We’re employing models due to the unemployment rate of this country.
          Learn more.
        </div>

        <form id="app-cover">
          <div id="select-box">
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" class="brd">
              <div id="selected-value">
                <span>Refine Search :</span>
              </div>
              <div id="chevrons">
                <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
                <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
              </div>
            </div>
            <div id="options">
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <i class="fa fa-male" aria-hidden="true"></i>
                <span class="label">Men's T-Shirt</span>
                <span class="opt-val">Men's T-Shirt</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <i class="fa fa-female" aria-hidden="true"></i>
                <span class="label">Men's Pants </span>
                <span class="opt-val">Men's Pants </span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <i class="fa fa-child" aria-hidden="true"></i>
                <span class="label">Men's Shoes</span>
                <span class="opt-val">Men's Shoes</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <span class="label">Women's T-Shirt</span>
                <span class="opt-val">Women's T-Shirt</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <i class="fa fa-diamond" aria-hidden="true"></i>
                <span class="label">Women's Pants</span>
                <span class="opt-val">Women's Pants</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span class="label">Women's Sneakers</span>
                <span class="opt-val">Women's Sneakers</span>
              </div>
              <div id="option-bg"></div>
            </div>
          </div>
        </form>

        <a
          href="https://www.youtube.com/channel/UC7hSS_eujjZOEQrjsda76gA/videos"
          target="_blank"
          id="ytd-url"
        >
          My YouTube Channel
        </a>
      </section>
      <div id="container1">
        <div class="container__item">
          <form class="form">
            <input type="search" class="form__field" placeholder="Search" />
            <button
              type="button"
              class="btn btn--primary btn--inside uppercase"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <section className="twitter">
        <div className="container">
          <div className="items">{prouductDetails.map(getCard)}</div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
