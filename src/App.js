import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle";
//importing pages
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
