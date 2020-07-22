import React from "react";
import "../pages/About.scss";
// import Jordan from "./t-shirt-grey-jordan.png";

export const Shop = () => {
  return (
    <div className="wrapper">
      <div class="menu">
        <div class="title">MENU</div>
        <ul class="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Resources</a>
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
      </section>
      <div class="intro">
        <h1>About</h1>
        <p>
          <span>"</span> This is going to be the description of my about page
          <span>"</span>
        </p>
      </div>
    </div>
  );
};
export default Shop;
