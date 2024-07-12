export const PlusTile = ({ onClick }) => {
  return (
    <div className="tile__add-btn tile" onClick={onClick}>
      <div className="add-btn__plus">
        <div className="plus__horizontal" />
        <div className="plus__vertical" />
      </div>
    </div>
  );
};
