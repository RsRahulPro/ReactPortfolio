import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
//importing pages
import AboutUs from "./Pages/AboutUs";
import Nav from "./Components/Nav";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import MovieDetail from "./Pages/MovieDetail";
import {motion, AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/work/:movieName" element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
