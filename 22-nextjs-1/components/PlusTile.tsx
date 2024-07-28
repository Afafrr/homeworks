import styles from "../styles/Home.module.css";
export const PlusTile = ({ onClick }: { onClick: React.MouseEventHandler }) => {
  return (
    <div
      className={`${styles.tile} ${styles["tile__add-btn"]}`}
      onClick={onClick}
    >
      <div className={styles["add-btn__plus"]}>
        <div className={styles.plus__horizontal} />
        <div className={styles.plus__vertical} />
      </div>
    </div>
  );
};
