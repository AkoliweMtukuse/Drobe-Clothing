import React from "react";
import "../pages/Shop.scss";
// import Jordan from "./t-shirt-grey-jordan.png";

export const Shop = () => {
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
                <span class="label">Men's Clothing</span>
                <span class="opt-val">Men's Clothing</span>
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
                <span class="label">Women's Clothing</span>
                <span class="opt-val">Women's Clothing</span>
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
                <span class="label">Kid's Clothing</span>
                <span class="opt-val">Kid's Clothing</span>
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
                <span class="label">Baby's Clothing</span>
                <span class="opt-val">Baby's Clothing</span>
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
                <span class="label">Accessories</span>
                <span class="opt-val">Accessories</span>
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
                <span class="label">Drobe</span>
                <span class="opt-val">Drobe</span>
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
          <div className="items">
            <div class="product-card">
              <div class="badge">Drobe</div>
              <div class="product-tumb">
                <img
                  src="https://png2.cleanpng.com/sh/440670fa62862568249e24af1a59dfe3/L0KzQYm3VMI1N5JufZH0aYP2gLBuTfFlcZVmi59EZXX9iX7ohPllaaQyhARyZ3nxcb36TgNpd5Yyi9DuYXvogsS0gvxia5wyedDtLYfrecXsTgN1epp1fZ8AYXTpcrPtgvVjPpNoSpCEM0e0SIG6UcE2OmU7SaQ5OUG8RoW6TwBvbz==/kisspng-adidas-yeezy-adidas-originals-shoe-sneakers-black-and-white-stripe-5adfbbfbeb6bc2.9371803115246120919643.png"
                  alt=""
                />
              </div>
              <div class="product-details">
                <span class="product-catagory">Mens Shoe</span>
                <h4>
                  <a href="">Yeezy</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vero, possimus nostrum!
                </p>
                <div class="product-bottom-details">
                  <div class="product-price">
                    <small>R500.00</small>R3660.99
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
          <div className="items">
            <div class="product-card">
              <div class="badge">Drobe</div>
              <div class="product-tumb">
                <img
                  src="https://png2.cleanpng.com/sh/440670fa62862568249e24af1a59dfe3/L0KzQYm3VMI1N5JufZH0aYP2gLBuTfFlcZVmi59EZXX9iX7ohPllaaQyhARyZ3nxcb36TgNpd5Yyi9DuYXvogsS0gvxia5wyedDtLYfrecXsTgN1epp1fZ8AYXTpcrPtgvVjPpNoSpCEM0e0SIG6UcE2OmU7SaQ5OUG8RoW6TwBvbz==/kisspng-adidas-yeezy-adidas-originals-shoe-sneakers-black-and-white-stripe-5adfbbfbeb6bc2.9371803115246120919643.png"
                  alt=""
                />
              </div>
              <div class="product-details">
                <span class="product-catagory">Mens Clothing</span>
                <h4>
                  <a href="">VLONE jersey</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vero, possimus nostrum!
                </p>
                <div class="product-bottom-details">
                  <div class="product-price">
                    <small>R500.00</small>R3660.99
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
          <div className="items">
            <div class="product-card">
              <div class="badge">Drobe</div>
              <div class="product-tumb">
                <img
                  src="https://png2.cleanpng.com/sh/bee05b30244d81816acbc86a80364a2f/L0KzQYm3WcI5N513j5H0aYP2gLBuTfhwd5VufZ99LYPrecP7Tf5qc5YyiAluYYTogn71iftmNaVtfeR2YT3ofLr7hb1ngl5th9HtaXWwfbb1U8l0NZNmi91udHKwRbPohcZlQWlqe6IBZkOxSIi3WcI5QWg2TaUDMUW6SYi9WcY3QF91htk=/kisspng-hoodie-t-shirt-nike-sweater-nike-therma-elite-fz-hoodie-men39s-basketb-5bae6d98ec06f3.8709289715381579769668.png"
                  alt=""
                />
              </div>
              <div class="product-details">
                <span class="product-catagory">Mens Clothaing</span>
                <h4>
                  <a href="">Nike Sports Sweater</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vero, possimus nostrum!
                </p>
                <div class="product-bottom-details">
                  <div class="product-price">
                    <small>R500.00</small>R3660.99
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
        </div>
      </section>
    </div>
  );
};
export default Shop;
