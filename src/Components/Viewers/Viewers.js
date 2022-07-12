import React from "react";
import { Container } from "./styles";
import Wrap from "./Wrap";

function Viewers() {
  return (
    <Container>
      <Wrap image="/images/viewers-disney.png" video={"/videos/disney.gif"} />
      <Wrap image="/images/viewers-pixar.png" video={"/videos/pixar.gif"} />
      <Wrap image="/images/viewers-marvel.png" video={"/videos/marvel.gif"} />
      <Wrap
        image="/images/viewers-starwars.png"
        video={"/videos/star-wars.gif"}
      />
      <Wrap
        image="/images/viewers-national.png"
        video={"/videos/national.gif"}
      />
    </Container>
  );
}

export default Viewers;
