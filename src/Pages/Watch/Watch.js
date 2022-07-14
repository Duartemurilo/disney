import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ApiKey, BaseUrl, recomend } from "../../Constants/Url";
import {
  Banner,
  Container,
  GradienteLeft,
  Gradiente,
  Section,
  Main,
  Loading,
} from "./styles";
import Header from "../../Components/Header/Header";
import CardInfo from "./CardInfo";
import Movies from "../../Components/Movie/Movies";
import { useRequestData } from "../../Hooks/UseRequestData";
import useMediaQuery from "@mui/material/useMediaQuery";
import Nav from "./Nav";
import Recomends from "./Recomends";
import { CircularProgress } from "@mui/material";

function Watch() {
  const param = useParams();
  const recodUrl = useRequestData(recomend);
  const matches = useMediaQuery("(max-width:1100px)");
  const [tvData, setTvData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  const getTvData = useCallback(() => {
    axios
      .get(`${BaseUrl}tv/${param.id}?language=pt-BR&api_key=${ApiKey}`)
      .then((res) => {
        setTvData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.id]);

  const getMoveData = useCallback(() => {
    axios
      .get(`${BaseUrl}movie/${param.id}?language=pt-BR&api_key=${ApiKey}`)
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.id]);

  useEffect(() => {
    if (param.type === "tv") getTvData();
    if (param.type === "movie") getMoveData();

    if (param.type === "undefined") {
      getMoveData();

      getTvData();
    }
  }, [getMoveData, getTvData, param.type]);

  return (
    <>
      {!!tvData.id || !!movieData.id ? (
        <Container>
          <Header classHeader={true} show={true} />
          <Banner
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: !!tvData.episode_run_time
                ? `url(https://image.tmdb.org/t/p/original${tvData.backdrop_path})`
                : `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
            }}
          >
            <Gradiente>
              <GradienteLeft>
                <Main>
                  <Section>
                    {!!tvData.episode_run_time ? (
                      <h4>{tvData.name}</h4>
                    ) : (
                      <h4>{movieData.title}</h4>
                    )}
                  </Section>
                  {!!tvData.episode_run_time ? (
                    <CardInfo
                      release_date={tvData.release_date}
                      runtime={tvData.runtime}
                      tagline={tvData.tagline}
                      first_air_date={tvData.first_air_date}
                      number_of_seasons={tvData.number_of_seasons}
                      overview={tvData.overview}
                      type={"tv"}
                    />
                  ) : (
                    <CardInfo
                      release_date={movieData.release_date}
                      runtime={movieData.runtime}
                      tagline={movieData.tagline}
                      overview={movieData.overview}
                      type={"movie"}
                    />
                  )}
                </Main>
              </GradienteLeft>
            </Gradiente>
          </Banner>

          <Nav />

          {!!matches ? (
            <span id="movie">
              <Recomends movieList={recodUrl?.results} />
            </span>
          ) : (
            <span id="movie">
              <Movies movieList={recodUrl?.results} />
            </span>
          )}
        </Container>
      ) : (
        <Loading>
          <CircularProgress />
        </Loading>
      )}
    </>
  );
}

export default Watch;
