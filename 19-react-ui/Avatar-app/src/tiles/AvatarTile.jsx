import React from "react";
import { useState } from "react";
import { reloadSvg } from "../assets/assets.jsx";

export const AvatarTile = ({ imgSrc, onClick }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="tile__wrapper tile"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={onClick}
    >
      <img
        className="tile tile__image"
        src={imgSrc}
        alt="Avatar"
        style={{ filter: `${show ? "brightness(40%)" : ""}` }}
      />
      {show && reloadSvg}
    </div>
  );
};
