import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle";
//importing pages
import AboutUs from "./Pages/AboutUs";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
