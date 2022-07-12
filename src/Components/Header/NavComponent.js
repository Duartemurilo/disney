import React from "react";
import { CardNav } from "./styles";

function NavComponent({ text, Icon }) {
  return (
    <CardNav>
      <Icon style={{ fontSize: 19 }} />
      <p>
        {text} <div className=" border" />
      </p>
    </CardNav>
  );
}

export default NavComponent;
