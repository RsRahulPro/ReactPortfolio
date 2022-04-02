import React from "react";
import home1 from "../img/home1.png";
//import styled
import styled from "styled-components";
import {About, Hide, Image, Description} from "./styles";

let AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2> come true.</h2>
          </Hide>
        </div>
        <p>Contact us for any photography or videography ideas that you have. We have experienced professionals for your needs</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="A man with a photo camera" />
      </Image>
    </About>
  );
};

// styled component

export default AboutSection;
