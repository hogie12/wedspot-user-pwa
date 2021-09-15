import React from "react";
import "./Button.css";

const ButtonSecondary = ({ width, content = "Content", onClick, height }) => {
  return (
    <button
      className="secondary"
      style={{
        width: `${width}`,
        height: `${height}`
      }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default ButtonSecondary;
