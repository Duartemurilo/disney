import React from "react";
import CardMovie from "../../Components/Movie/CardMovie";
import { WrapRecomends } from "./styles";

function Recomends({ movieList }) {
  return (
    <WrapRecomends>
      {movieList?.map((movie) => {
        return (
          <CardMovie
            image={movie.poster_path}
            id={movie.id}
            type={movie.media_type}
          />
        );
      })}
    </WrapRecomends>
  );
}

export default Recomends;
