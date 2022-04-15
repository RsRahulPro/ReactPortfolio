import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle";
import {BrowserRouter, Routes, Route} from "react-router-dom";
//importing pages
import AboutUs from "./Pages/AboutUs";
import Nav from "./Components/Nav";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/work/:movieName" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
