import React from "react";
import { Carousel, Row, Col, Card } from "antd";
import "./Carousel.css";
import Pic1 from "./menwear.jpg";
import Pic2 from "./menwear2.jpg";
import Pic3 from "./menwear3.jpg";
import Pic4 from "./menwear4.jpg";
import Pic5 from "./womenwear.jpg";
import Pic6 from "./womenwear2.jpg";
import Pic7 from "./womenwear3.jpg";
import Pic8 from "./womenwear4.jpg";

export const Sliders = () => {
  return (
    <div>
      <br></br>
      <Row id="Row">
        <Col span={18} push={6}>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Mens Clothing"
              bordered={false}
              // style={{ width: 100 %; }}
              id="Card"
            >
              <h1>Casual Wear</h1>
              <h1>AND</h1>
              <h1>Classic Wear</h1>
            </Card>
          </div>
        </Col>
        <Col span={6} pull={18}>
          <Carousel autoplay id="TopCarousel">
            <div>
              <img src={Pic1} alt="Pic1" id="slider-pics" />
            </div>
            <div>
              <img src={Pic2} alt="Pic2" id="slider-pics" />
            </div>
            <div>
              <img src={Pic3} alt="Pic3" id="slider-pics" />
            </div>
            <div>
              <img src={Pic4} alt="Pic4" id="slider-pics" />
            </div>
          </Carousel>
        </Col>
      </Row>
      ,{" "}
      <Row id="Row">
        <Col span={6} push={18}>
          <Carousel autoplay id="TopCarousel">
            <div>
              <img src={Pic5} alt="Pic5" id="slider-pics" />
            </div>
            <div>
              <img src={Pic6} alt="Pic6" id="slider-pics" />
            </div>
            <div>
              <img src={Pic7} alt="Pic7" id="slider-pics" />
            </div>
            <div>
              <img src={Pic8} alt="Pic8" id="slider-pics" />
            </div>
          </Carousel>
        </Col>
        <Col span={18} pull={6}>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Womens Clothing"
              bordered={false}
              // style={{ width: 100 %; }}
              id="Card"
            >
              <h1>Casual Wear</h1>
              <h1>AND</h1>
              <h1>Classic Wear</h1>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Sliders;
