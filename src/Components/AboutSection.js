import React from "react";
import home1 from "../img/home1.png";
//import styled
import styled from "styled-components";
import {About, Hide, Image, Description} from "./styles";
import {motion} from "framer-motion";
import {titleAnimation, fadeAnimation, photoAnimation} from "./Animation";
import Wave from "./Wave";

let AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}> come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We have experienced professionals for your needs
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="A man with a photo camera" />
      </Image>
      <Wave />
    </About>
  );
};

// styled component

export default AboutSection;
