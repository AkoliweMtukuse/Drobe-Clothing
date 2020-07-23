import React, { Component } from "react";
import "../pages/Shop.scss";
import MenTshirts from "../products/Men/MenTshirts";
import Card from "../layout/Card";

class Shop extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    var cardData = MenTshirts.map((item, i) => {
      return <Card key={i} data={item} />;
    });
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
                    id="Men-input1"
                  />
                  <input class="s-c bottom" type="radio" name="platform" />
                  <i class="fa fa-male" aria-hidden="true"></i>
                  <span class="label" id="MenWEAR">
                    Men's T-Shirt
                  </span>
                  <span class="opt-val">Men's T-Shirt</span>
                </div>
                <div class="option">
                  <input class="s-c top" type="radio" name="platform" />
                  <input class="s-c bottom" type="radio" name="platform" />
                  <i class="fa fa-female" aria-hidden="true"></i>
                  <span class="label">Men's Pants</span>
                  <span class="opt-val">Men's Pants</span>
                </div>
                <div class="option">
                  <input class="s-c top" type="radio" name="platform" />
                  <input class="s-c bottom" type="radio" name="platform" />
                  <i class="fa fa-child" aria-hidden="true"></i>
                  <span class="label">Men's Shoes</span>
                  <span class="opt-val">Men's Shoes</span>
                </div>
                <div class="option">
                  <input class="s-c top" type="radio" name="platform" />
                  <input class="s-c bottom" type="radio" name="platform" />
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                  <span class="label">Women's T-Shirt</span>
                  <span class="opt-val">Women's T-Shirt</span>
                </div>
                <div class="option">
                  <input class="s-c top" type="radio" name="platform" />
                  <input class="s-c bottom" type="radio" name="platform" />
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <span class="label">Women's Pants</span>
                  <span class="opt-val">Women's Pants</span>
                </div>
                <div class="option">
                  <input class="s-c top" type="radio" name="platform" />
                  <input class="s-c bottom" type="radio" name="platform" />
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
            <div className="items">{cardData}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Shop;
