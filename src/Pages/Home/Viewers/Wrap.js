import React from "react";
import { Card } from "./styles";

function Wrap({ image, video }) {
  return (
    <Card>
      <img src={image} alt="" className="image" />
      <img src={video} alt="" className="video" />
    </Card>
  );
}

export default Wrap;
