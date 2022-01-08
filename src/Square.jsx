import React from "react";
import "./Square.scss";

const Square = ({ value, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="square"
      style={{
        flexBasis: "33.33%",
        height: "10.9rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid white",
        backgroundColor: "Wheat",
        flexGrow: "0",
        flexShrink: "0",
      }}
    >
      <p>{value}</p>
    </div>
  );
};

export default Square;
