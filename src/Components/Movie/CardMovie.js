import React from "react";
import { Link } from "react-router-dom";
import { UrlImg } from "../../Constants/image_url";

function CardMovie({ image, id, type }) {
  return (
    <Link type="button" to={`/Watch/${id}/${type}`}>
      <img src={`${UrlImg}${image}`} alt="" />
    </Link>
  );
}

export default CardMovie;
