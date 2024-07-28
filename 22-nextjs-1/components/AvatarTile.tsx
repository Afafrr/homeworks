import React from "react";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { MenuIcon } from "@/public/SvgReload";

export const AvatarTile = ({
  imgSrc,
  onClick,
}: {
  imgSrc: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${styles.tile} ${styles.tile__wrapper}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={onClick}
    >
      <Image
        className={`${styles.tile} ${styles.tile__image}`}
        style={{ filter: `${show ? "brightness(40%)" : ""}` }}
        src={imgSrc}
        alt="Avatar"
        width={240}
        height={240}
      />
      {show && <MenuIcon className={styles.tile__svg} />}
    </div>
  );
};
