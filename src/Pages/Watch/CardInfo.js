import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import {
  BtnAdd,
  BtnContainer,
  BtnPlay,
  BtnTrailer,
  CardInfo,
  Description,
  InfoContainer,
} from "./styles";

function CardInfoComponent({
  release_date,
  runtime,
  first_air_date,
  overview,
  number_of_seasons,
  tagline,
  type,
}) {
  const date = new Date(release_date);
  const serieDate = new Date(first_air_date);

  const tempoMinutos = runtime;
  const duracaoHora = tempoMinutos / 60;
  const fuulTime = duracaoHora.toFixed(2);

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return (
    <CardInfo>
      <InfoContainer>
        <span>
          <img id="livre" src="/images/livre.png" alt="" />
          <img src="/images/ad.png" alt="" />
          <img src="/images/cc.png" alt="" />
          {!!first_air_date ? serieDate.getFullYear() : date.getFullYear()}

          {type === "tv" ? (
            <p>
              {number_of_seasons >= 0 && number_of_seasons}
              {number_of_seasons <= 1 ? " Temporada" : " Temporadas"}
            </p>
          ) : (
            <p> {fuulTime > 0 && fuulTime + "h"} </p>
          )}
        </span>
        <p id="tagline">{tagline}</p>
      </InfoContainer>
      <BtnContainer>
        <BtnPlay>
          <img src="/images/play-icon-black.png" alt="" />
          <p>assistir</p>
        </BtnPlay>
        <BtnTrailer>
          <p>trailer</p>
        </BtnTrailer>
        <BtnAdd />
      </BtnContainer>
      <Description>
        <p>{!!overview ? overview : lorem.generateSentences(5)}</p>
      </Description>
    </CardInfo>
  );
}

export default CardInfoComponent;
