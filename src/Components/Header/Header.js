import React from "react";
import { Container, ProfileCard, Section } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import NavComponent from "./NavComponent";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AuthContext } from "../../AuthContext";

function Header({ classHeader, show }) {
  const { profile } = React.useContext(AuthContext);

  return (
    <Container className={!!classHeader && "transparent"}>
      <Section>
        {!!show && (
          <Link to={"/"}>
            <span id="arrow-back">
              <ArrowBackIosIcon
                style={{ fontSize: 25, color: "white", cursor: "pointer" }}
              />
            </span>
          </Link>
        )}

        <img src="/images/logo.svg" alt="" />
        <NavComponent text="início" Icon={HomeIcon} />
        <NavComponent text="pesquisa" Icon={SearchIcon} />
        <NavComponent text="minha lista" Icon={AddIcon} />
        <NavComponent text="originais" Icon={StarIcon} />
        <NavComponent text="filmes" Icon={MovieIcon} />
        <NavComponent text="séries" Icon={LiveTvIcon} />
      </Section>

      <Link id="link" to={"/edit-profiles"}>
        <ProfileCard>
          <p>Murilo duarte</p>
          <img src={profile} alt="" />
        </ProfileCard>
      </Link>
    </Container>
  );
}

export default Header;
