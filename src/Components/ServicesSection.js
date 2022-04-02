import React from "react";
import home1 from "../img/home1.png";
import home2 from "../img/home2.png";
//importing styled components
import styled from "styled-components";
import {Description} from "./styles";
import {About, Image} from "./styles";
//importing icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

let ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
    font-size: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
  .icon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`;
const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-content: center;
  }
`;

export default ServicesSection;
