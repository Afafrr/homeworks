import { useState, useEffect } from "react";
import { Avatar } from "@/types/types";
import { PlusTile } from "./PlusTile";
import { AvatarTile } from "./AvatarTile";
import styles from "@/styles/Home.module.css";
import { fetchAvatars } from "@/services/fetchAvatars";

export const Tiles = ({ data }: { data: Avatar[] }) => {
  const [avatarList, setAvatarList] = useState<Avatar[]>([]);
  const [clientData, setClientData] = useState<Avatar[]>();
  useEffect(() => {
    setClientData(data);
  }, []);
  const fetchUniqueAvatars = async (num: number) => {
    try {
      const res = await fetchAvatars(num);
      const uniqueArr = res.filter((item: Avatar) => {
        const unique = avatarList.every((avatar) => avatar.id !== item.id);
        if (unique) return item;
      });
      if (uniqueArr.length === 0) fetchUniqueAvatars(num);
      return uniqueArr;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  const handleAvatarAddition = async () => {
    let avatar;
    if (clientData) avatar = clientData.shift();
    if (avatar) {
      setAvatarList([...avatarList, avatar]);
      if (clientData && clientData.length < 2) {
        const uniqueArr = await fetchUniqueAvatars(5);
        setClientData(uniqueArr);
      }
    }
  };
  //one avatar refresh
  const handleAvatarRefresh = async (id: number) => {
    const res = await fetchUniqueAvatars(1);
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
          key={item?.id}
          imgSrc={item?.url}
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
