import React from "react";
import "./Button.css";

const QuotationNew = ({
  width,
  content = "content",
  onClick,
  margin,
  fontSize = "10px",
  background,
}) => {
  return (
    <button
      className="pill-new"
      style={{
        width: `${width}`,
        margin: `${margin}`,
        fontSize: `${fontSize}`,
        background: `${background}`,
      }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default QuotationNew;
