import React, { Component } from "react";
import "../pages/Shop.scss";

export const Shop = () => {
  const prouductDetails = [
    {
      id: 1,
      title: "Nike T-Shirt",
      img:
        "https://png2.cleanpng.com/sh/8ff311f9b28687ae2185efcffc8511e7/L0KzQYm3VMExN5Nuj5H0aYP2gLBuTgQue5luiuY2Y3zyhLnwjvcua6Nqj593ZXPuPb7olPNpbaRreeVxaXBxPbT2jb11NaRtgeR9cz24cbTqhcU0aZNne6dvOD63Qoq5WMQ5PGI6SqU8N0e3RoeAVskyNqFzf3==/kisspng-t-shirt-clothing-crew-neck-matchesfashion-com-t-shirts-5acce53abbc5f8.4292848415233774667691.png",
      category: "Men",
      cost: "R359",
      save: "R100",
    },
    {
      id: 2,
      title: "Nike Goldylocks T-Shirt",
      img:
        "https://png2.cleanpng.com/sh/95f6982d5e4ce2ee5bec674e7466853e/L0KzQYm3VME6N6R1j5H0aYP2gLBuTgQue5luiuY2bnnudX7qjP91cJpzf598bHXohra0gBF0fZ0yjOVxaYL3PYbohMkyOpU2fdhvYnG7PoWBUMIyPmU8Sac7NEG6RYa9Wck5O191htk=/kisspng-t-shirt-nike-clothing-sleeve-casul-tshirt-5ad912d1effba8.480216471524175569983.png",
      category: "Men",
      cost: "R359",
      save: "R100",
    },
    {
      id: 3,
      title: "Nike T-Shirt",
      img:
        "https://png2.cleanpng.com/sh/95f6982d5e4ce2ee5bec674e7466853e/L0KzQYm3VME6N6R1j5H0aYP2gLBuTgQue5luiuY2bnnudX7qjP91cJpzf598bHXohra0gBF0fZ0yjOVxaYL3PYbohMkyOpU2fdhvYnG7PoWBUMIyPmU8Sac7NEG6RYa9Wck5O191htk=/kisspng-t-shirt-nike-clothing-sleeve-casul-tshirt-5ad912d1effba8.480216471524175569983.png",
      category: "Men",
      cost: "R359",
      save: "R100",
    },
    {
      id: 4,
      title: "Nike T-Shirt",
      img:
        "https://png2.cleanpng.com/sh/95f6982d5e4ce2ee5bec674e7466853e/L0KzQYm3VME6N6R1j5H0aYP2gLBuTgQue5luiuY2bnnudX7qjP91cJpzf598bHXohra0gBF0fZ0yjOVxaYL3PYbohMkyOpU2fdhvYnG7PoWBUMIyPmU8Sac7NEG6RYa9Wck5O191htk=/kisspng-t-shirt-nike-clothing-sleeve-casul-tshirt-5ad912d1effba8.480216471524175569983.png",
      category: "Men",
      cost: "R359",
      save: "R100",
    },
  ];

  const getCard = (card, index) => {
    var name = card.title;
    var price = card.cost;
    var type = card.category;
    var product = card.img;
    var saving = card.save;

    return (
      <div class="product-card" key={index}>
        <div class="badge">Drobe</div>
        <div class="product-tumb">
          <img src={product} alt="" />
        </div>
        <div class="product-details">
          <span class="product-catagory">{type}</span>
          <h4>
            <a href="">{name}</a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            possimus nostrum!
          </p>
          <div class="product-bottom-details">
            <div class="product-price">
              <small>{saving}</small>
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
          <div className="items">{prouductDetails.map(getCard)}</div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
