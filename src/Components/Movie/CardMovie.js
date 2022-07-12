import React from "react";
import { UrlImg } from "../../Constants/image_url";

function CardMovie({ image }) {
  return <img src={`${UrlImg}${image}`} alt="" />;
}

export default CardMovie;
