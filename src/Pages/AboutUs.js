import React from "react";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import FaqSection from "../Components/FaqSection";
import Nav from "../Components/Nav";
import {motion, AnimatePresence} from "framer-motion";
import {pageAnimation} from "../Components/Animation";
import ScrollTop from "../Components/ScrollTop";

let AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
