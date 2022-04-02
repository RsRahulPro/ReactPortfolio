import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
  img {
    height: 80vh;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
