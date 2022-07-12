import React from "react";
import CardMovie from "./CardMovie";
import { Carousel, Container } from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Movies({ title, movieList }) {
  const matches = useMediaQuery("(max-width:1100px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: !!matches ? 3 : 5,
    slidesToScroll: 5,
  };

  return (
    <Container>
      <h4> {title} </h4>
      <Carousel {...settings}>
        {movieList?.map((movie) => {
          return <CardMovie image={movie.poster_path} />;
        })}
      </Carousel>
    </Container>
  );
}

export default Movies;
