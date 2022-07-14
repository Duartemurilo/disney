import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import {
  ContainerProfile,
  Container,
  Header,
  Section,
  SectionAdd,
} from "./styles";

function EditProfile() {
  return (
    <Container>
      <Header>
        <img src="/images/logo.svg" alt="" />
        <Link id="link" to={"/"}>
          <button>Pronto</button>
        </Link>
      </Header>
      <h2>Editar perfis</h2>
      <h4>Selecione um perfil para editar</h4>
      <ContainerProfile>
        <Section>
          <Profile image={"/images/prof1.png"} name="Murilo" />
          <Profile image={"/images/prof2.png"} name="Muzi" />
          <Profile image={"/images/prof3.png"} name="Mumuzinho" />
          <Profile image={"/images/prof4.png"} name="Musteca" />
        </Section>
        <SectionAdd>
          <Profile image={"/images/watchlist-icon.svg"} />
        </SectionAdd>
      </ContainerProfile>
    </Container>
  );
}

export default EditProfile;
