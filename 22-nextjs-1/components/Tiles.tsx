import { useState, useEffect } from "react";
import { Avatar } from "@/types/types";
import { PlusTile } from "./PlusTile";
import { AvatarTile } from "./AvatarTile";
import styles from "@/styles/Home.module.css";
import { fetchAvatars } from "@/services/fetchAvatars";

export const Tiles = ({ data }: { data: Avatar[] }) => {
  const [avatarList, setAvatarList] = useState<Avatar[]>([]);
  const [clientData, setClientData] = useState<Avatar[]>([]);
  useEffect(() => {
    setClientData(data);
  }, []);
  //fetch new data one image before
  const handleAvatarAddition = async () => {
    const avatar = clientData ? clientData.shift() : null;
    if (avatar) {
      setAvatarList([...avatarList, avatar]);
      if (clientData && clientData.length < 2) {
        const res = await fetchAvatars(5);
        setClientData(res);
      }
    }
  };
  //one avatar refresh
  const handleAvatarRefresh = async (id: number) => {
    const res = await fetchAvatars(1);
    avatarList.map((avatar, index) => {
      if (avatar.id === id) {
        const newArr = [...avatarList];
        newArr[index] = res[0];
        setAvatarList(newArr);
      }
    });
  };
  // every avatar refresh
  const handleEveryAvatarRefresh = async () => {
    if (avatarList.length > 0) {
      const res = await fetchAvatars(avatarList.length);
      setAvatarList(res);
    }
  };
  return (
    <div className={styles.tiles__container}>
      {avatarList.map((item) => (
        <AvatarTile
          key={item.id}
          imgSrc={item.url}
          onClick={() => handleAvatarRefresh(item.id)}
        />
      ))}
      <PlusTile onClick={handleAvatarAddition} />
      <button
        className={styles["main__btn-refresh"]}
        onClick={handleEveryAvatarRefresh}
      >
        Refresh All
      </button>
    </div>
  );
};
