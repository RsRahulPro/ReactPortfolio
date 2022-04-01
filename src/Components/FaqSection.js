import React from "react";
import home1 from "../img/home1.png";

let FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any questions
        <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
        </div>
      </div>
      <div className="question">
        <h4>Different payment methods?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
        </div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
        </div>
      </div>
      <div className="question">
        <h4>Daily Schedule?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;