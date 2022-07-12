import React from "react";
import Header from "../../Components/Header/Header";
import ImageSlide from "../../Components/imageSlider/ImageSlide";
import Movies from "../../Components/Movie/Movies";
import Viewers from "../../Components/Viewers/Viewers";
import { Container } from "./styles";
import { useRequestData } from "../../Hooks/UseRequestData";
import {
  recomend,
  weekTrending,
  tops,
  documentary,
  thorSimilar,
  upcoming,
} from "../../Constants/Url";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const recodUrl = useRequestData(recomend);
  const weekTrendingUrl = useRequestData(weekTrending);
  const topsUrl = useRequestData(tops);
  const docUrl = useRequestData(documentary);
  const thor = useRequestData(thorSimilar);
  const upcomingUrl = useRequestData(upcoming);

  return (
    <Container>
      <Header />
      <ImageSlide />
      <Viewers />
      <span>
        <Movies
          title={"Recomendados para Você"}
          movieList={recodUrl?.results}
        />
        <Movies title={"Tendências"} movieList={weekTrendingUrl?.results} />
        <Movies title={"Melhores Filmes"} movieList={topsUrl?.results} />
        <Movies title={"Diversão em Familia"} movieList={docUrl?.results} />
        <Movies
          title={"Porque você assistiiu thor"}
          movieList={thor?.results}
        />
        <Movies title={"Novidades"} movieList={upcomingUrl?.results} />
      </span>
      <Footer />
    </Container>
  );
}

export default Home;
