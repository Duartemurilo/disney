import React from "react";
import { Container, ProfileCard, Section } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import NavComponent from "./NavComponent";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function Header() {
  return (
    <Container>
      <Section>
        <img src="/images/logo.svg" alt="" />
        <NavComponent text="início" Icon={HomeIcon} />
        <NavComponent text="pesquisa" Icon={SearchIcon} />
        <NavComponent text="minha lista" Icon={AddIcon} />
        <NavComponent text="originais" Icon={StarIcon} />
        <NavComponent text="filmes" Icon={MovieIcon} />
        <NavComponent text="séries" Icon={LiveTvIcon} />
      </Section>
      <ProfileCard>
        <p>Murilo duarte</p>
        <img src="/images/bart.png" alt="" />
      </ProfileCard>
    </Container>
  );
}

export default Header;
