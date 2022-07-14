import React from "react";
import { Container } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";

function Menu() {
  const { profile } = React.useContext(AuthContext);

  return (
    <Container>
      <HomeIcon style={{ fontSize: 30 }} />
      <SearchIcon style={{ fontSize: 30 }} />
      <DownloadIcon style={{ fontSize: 30 }} />
      <Link to={"/edit-profiles"}>
        <img src={profile} alt="" />
      </Link>
    </Container>
  );
}

export default Menu;
