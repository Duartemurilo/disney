import React from "react";
import Socialmedia from "./Socialmedia";
import { CardText, Container } from "./styles";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Container>
      <img src="/images/logo.svg" alt="" />
      <CardText>
        <div>
          <p>Politica de privicidade</p>
          <p>Proteção de Dados no brasil</p>
          <p>Contrato de assinatura</p>
        </div>
        <div>
          <p>Ajuda</p>
          <p>Dispositivos compativos</p>
          <p>Sobre a Disney+</p>
          <p>Anúncios personalizados</p>
        </div>
        <div>
          <p style={{ cursor: "text" }}>
            Disney+ é um serviço pago, baseado em assinatura e sujeito a termos
            e condições. O serviço Disney+ é comercializado por The Walt Disney
            Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas,
            12.551, 12.555, 12.559, Piso 10, São Paulo/SP - CEP 04578-903,
            Brasil e CNPJ/M 73.042.962/0004-20
          </p>
        </div>
      </CardText>
      <div className="card-icon">
        <Socialmedia
          href={"https://www.linkedin.com/in/duartemurilo/"}
          icon={<BsLinkedin />}
        />
        <Socialmedia
          href={"https://github.com/Duartemurilo"}
          icon={<BsGithub />}
        />
        <Socialmedia
          href={"https://www.instagram.com/muriloduarte700/"}
          icon={<BsInstagram />}
        />
      </div>
    </Container>
  );
}

export default Footer;
