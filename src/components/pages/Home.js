import React from "react";
import "./Home.scss";
import Model1 from "../layout/mirror-model.jpg";
import Golfsneaker from "../layout/sideview-shoe.jpg";
import Womenreebok from "../layout/sideview-women.jpg";

export const Home = () => {
  return (
    <div className="wrapper">
      <div class="menu">
        <div class="title">MENU</div>
        <ul class="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div class="intro">
        <header>
          <div className="overlay" id="overlay">
            <h1>DROBE</h1>
            <h3>Urban Clothing</h3>
            <br></br>
            {/* <button>Shop Now!</button> */}
          </div>
        </header>
        <div class="colour-block">
          <h1>The Trends,</h1>
          <h1>Today!</h1>
          <div>
            <p>NEW RELEASES</p>
            <div class="s-wrap s-type-2" role="slider">
              <ul class="s-content">
                <li class="s-item s-item-1"></li>
                <li class="s-item s-item-2"></li>
                <li class="s-item s-item-3"></li>
                <li class="s-item s-item-4"></li>
                <li class="s-item s-item-5"></li>
              </ul>
            </div>
          </div>
          <div class="box-wrap">
            <div class="box">
              <h1>30% Sale on Accesories</h1>
            </div>
            <div class="box">
              <h1>New Men's Clothing</h1>
            </div>
            <div class="box">
              <h1>Brands / Labels</h1>
            </div>
          </div>
          <div class="artist-card">
            <h2 class="artist-card__title">Unlimted Fashion</h2>
            <img class="artist-card__img" src={Model1} alt="St. Vincent" />
          </div>
        </div>
        <div class="skew-cc"></div>
        <div class="white-block">
          <div class="flex-box" id="boxes-wrapper">
            <h1>
              STAY FASHIONABLE,<br></br>THIS WINTER!
            </h1>

            <h3 id="h2">
              For Only <span>R499</span>
            </h3>
          </div>
          <h2>GET YOURSELF A SWEATER AND SWEATPANT</h2>
          <div class="flex-box" id="boxes-wrapper">
            <div id="boxes">
              <img src="https://i.pinimg.com/564x/da/77/e8/da77e84d6b54a31489d621f955510629.jpg" />
              <span>The Trends</span>
            </div>
            <div id="boxes">
              <span>model</span>
              <img src="https://i.pinimg.com/564x/d7/ba/c5/d7bac52e102fad0ca91d8ce4bbbb20e0.jpg" />
            </div>
            <div id="boxes">
              <img src="https://i.pinimg.com/564x/50/90/7b/50907b2f6cff470737515ea205cf3944.jpg" />
              <span>model</span>
            </div>
            <div id="boxes">
              <span>model</span>
              <img src="https://i.pinimg.com/564x/d4/bc/e0/d4bce00f8e9eeb20b893d5c939966c10.jpg" />
            </div>
          </div>
          <h2>// OUR TOP BRANDS //</h2>
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="skew-c"></div>
        <div class="colour-block">
          <div class="cards">
            <div class="card content">
              <div class="card-content">
                <div class="card-img">
                  <img src={Golfsneaker} alt="keyboard" />
                </div>
                <div class="card-label">Drobe</div>
                <div class="card-title">
                  New Converse Golf le FLEUR Sneakers
                </div>
              </div>
            </div>

            <div class="card form">
              <div class="form-title">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
