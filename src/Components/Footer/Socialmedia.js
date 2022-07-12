import React from "react";

function Socialmedia({ href, icon }) {
  return (
    <a href={href} target="_blank" className="icon-footer" rel="noreferrer">
      {icon}
    </a>
  );
}

export default Socialmedia;
