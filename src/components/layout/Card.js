import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="items">
        <div class="product-card" key={this.props.data.id}>
          <div class="badge">Drobe</div>
          <div class="product-tumb">
            <img src={this.props.data.src} alt="" />
          </div>
          <div class="product-details">
            <span class="product-catagory">{this.props.data.type}</span>
            <h4>
              <a href="">{this.props.data.title}</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>{this.props.data.saving}</small>
                {this.props.data.cost}
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
  }
}

export default Card;
