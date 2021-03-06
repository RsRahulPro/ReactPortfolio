import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {MovieState} from "../Components/MovieState";
import styled from "styled-components";
import {Description} from "../Components/styles";
import {motion} from "framer-motion";
import {pageAnimation} from "../Components/Animation";

const MovieDetail = () => {
  let {movieName} = useParams();
  let url = `/work/${movieName}`;
  let [movies, setMovies] = useState(MovieState);
  let [currentMovie, setCurrentMovie] = useState(
    movies.filter((movie) => {
      return movie.url === url;
    })[0]
  );

  useEffect(() => {
    setCurrentMovie(
      movies.filter((movie) => {
        return movie.url === url;
      })[0]
    );
    console.log(currentMovie);
  }, [movies, url]);
  return (
    <Details variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <Headline>
        <h2>{currentMovie.title}</h2>
        <img src={currentMovie.mainImg}></img>
      </Headline>
      <Awards>
        {currentMovie.awards.map((award) => (
          <Award title={award.title} description={award.description} key={award.title} />
        ))}
      </Awards>
      <ImageDisplay>
        <img src={currentMovie.secondaryImg} />
      </ImageDisplay>
    </Details>
  );
};

let Details = styled(motion.div)`
  color: white;
`;
let Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
let Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
let AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0rem;
  }
`;

let ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Award = ({title, description}) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default MovieDetail;
