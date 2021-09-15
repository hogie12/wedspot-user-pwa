import React from "react";
import { Link } from "react-router-dom";
import Phone from "../asset/NoPhone.png";
import ButtonPrimary from "../buttons/ButtonPrimary";

const NoresultPhone = ({
  title = "No Result Title",
  description = "Please Try",
  titleButton,
  width,
  link,
  marginButton,
  margin,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: margin,
      }}
    >
      <img
        src={Phone}
        alt="No Result"
        style={{
          width: "320px",
          margin: "24px",
        }}
      ></img>
      <h3 style={{ fontSize: "16px", margin: "4px", fontWeight: 600 }}>
        {title}
      </h3>
      <p style={{ fontSize: "16px", margin: "4px" }}>{description}</p>
      {titleButton ? (
        <Link to={link} style={{ margin: marginButton }}>
          <ButtonPrimary content={titleButton} width={width} />
        </Link>
      ) : null}
    </div>
  );
};

export default NoresultPhone;
