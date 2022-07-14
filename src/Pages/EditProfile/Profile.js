import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import { CardProfile } from "./styles";

function Profile({ image, name, id }) {
  const { setProfile } = React.useContext(AuthContext);

  return (
    <CardProfile onClick={() => setProfile(image)}>
      <Link to={"/"}>
        <span>
          <img id={!!id && id} src={image} alt="" />
          <h3>{name}</h3>
        </span>
      </Link>
    </CardProfile>
  );
}

export default Profile;
