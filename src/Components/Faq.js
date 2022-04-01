import React from "react";
import home1 from "../img/home1.png";

let Faq = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2> come true.</h2>
          </div>
        </div>
        <p>Contact us for any photography or videography ideas that you have. We have experienced professionals for your needs</p>
        <button>Contact Us</button>
        <div className="image">
          <img src={home1} alt="A man with a photo camera" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
