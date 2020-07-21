import React from "react";
import "./Contact.scss";

export const Contact = () => {
  return (
    <div>
      <div class="container">
        <div class="front side">
          <div class="content">
            <h1>Contact Us</h1>
            <p>
              We are experiencing a high volume of orders and wait times may
              take longer than usual. Please note that we do continue to deliver
              orders, but deliveries also may take us longer than usual. To
              check the status of an order, please visit your orders page. Thank
              you for your patience.
            </p>
          </div>
        </div>
        <div class="back side">
          <div class="content">
            <h1>Write To Us</h1>
            <form>
              <label>Full Name :</label>
              <input type="text" placeholder="Your Name and Surname" />
              <label>Email :</label>
              <input type="text" placeholder="Example@gmail.com" />
              <label>Message :</label>
              <textarea placeholder="The Subject"></textarea>
              <a href="#" class="rainbow-button" alt="Send"></a>
            </form>
          </div>
        </div>
      </div>
      <div class="Button">
        <a class="btn btn-1">Exit</a>
      </div>
    </div>
  );
};
export default Contact;
