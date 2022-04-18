import React, {useState} from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import {About, Description, Image, Hide} from "./styles";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";
import {useScroll} from "./useScroll";
import {fadeAnimation} from "./Animation";

let FaqSection = () => {
  let [toggleState, setToggleState] = useState([false, false, false, false]);
  const [element, controls] = useScroll();
  return (
    <Faq variants={fadeAnimation} animate={controls} ref={element} initial="hidden">
      <AnimateSharedLayout>
        <h2>
          Any questions
          <span>FAQ</span>
        </h2>
        <div className="question">
          <h4
            onClick={() => {
              setToggleState([!toggleState[0], toggleState[1], toggleState[2], toggleState[3]]);
            }}
          >
            How do i start?
          </h4>
          <AnimateSharedLayout>
            <Toggle toggleState={toggleState[0]}>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
              </div>
            </Toggle>
          </AnimateSharedLayout>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4
            onClick={() => {
              setToggleState([toggleState[0], !toggleState[1], toggleState[2], toggleState[3]]);
            }}
          >
            Different payment methods?
          </h4>
          <AnimateSharedLayout>
            <Toggle toggleState={toggleState[1]}>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
              </div>
            </Toggle>
          </AnimateSharedLayout>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4
            onClick={() => {
              setToggleState([toggleState[0], toggleState[1], !toggleState[2], toggleState[3]]);
            }}
          >
            What products do you offer?
          </h4>
          <AnimateSharedLayout>
            <Toggle toggleState={toggleState[2]}>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
              </div>
            </Toggle>
          </AnimateSharedLayout>

          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4
            onClick={() => {
              setToggleState([toggleState[0], toggleState[1], toggleState[2], !toggleState[3]]);
            }}
          >
            Daily Schedule?
          </h4>
          <AnimateSharedLayout>
            <Toggle toggleState={toggleState[3]}>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem.</p>
              </div>
            </Toggle>
          </AnimateSharedLayout>

          <div className="faq-line"></div>
        </div>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1.5rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  display: block;
  h4 {
    font-size: 1.3rem;
  }
`;

export default FaqSection;
