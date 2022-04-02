import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import {About, Description, Image, Hide} from "./styles";

let FaqSection = () => {
  return (
    <Faq>
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
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different payment methods?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  display: block;
`;

export default FaqSection;
