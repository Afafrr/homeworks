import { useState } from "react";
import { PlusTile } from "./PlusTile.jsx";
import { AvatarTile } from "./AvatarTile.jsx";
import { fetchAvatars } from "../services/fetchAvatars.js";

export const Tiles = () => {
  const [avatarList, setAvatarList] = useState([]);
  //add avatar
  const handleAvatarAddition = async () => {
    const res = await fetchAvatars(1);
    setAvatarList([...avatarList, res[0]]);
  };
  //one avatar refresh
  const handleAvatarRefresh = (id) => {
    avatarList.map(async (avatar, index) => {
      if (avatar.id === id) {
        const res = await fetchAvatars(1);
        const newArr = [...avatarList];
        newArr[index] = res[0];
        setAvatarList(newArr);
      }
    });
  };
  //every avatar refresh
  const handleEveryAvatarRefresh = async () => {
    const res = await fetchAvatars(avatarList.length);
    setAvatarList(res);
  };

  return (
    <div className="tiles__container">
      {avatarList.map((item) => (
        <AvatarTile
          key={item.id}
          imgSrc={item.img}
          onClick={() => handleAvatarRefresh(item.id)}
        />
      ))}
      <PlusTile onClick={handleAvatarAddition} />

      <button className="main__btn-refresh" onClick={handleEveryAvatarRefresh}>
        Refresh All
      </button>
    </div>
  );
};
