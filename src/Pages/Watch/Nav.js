import React from "react";
import { NavContainer } from "./styles";

function Nav() {
  return (
    <NavContainer>
      <div className="nav">
        <p>sugestôes</p>
        <div className="botton" />
      </div>
      <div className="nav">
        <p>extras</p>
        <div className="botton" />
      </div>
      <div className="nav">
        <p>versões</p>
        <div className="botton" />
      </div>
      <div className="nav">
        <p>detalhes</p>
        <div className="botton" />
      </div>
    </NavContainer>
  );
}

export default Nav;
