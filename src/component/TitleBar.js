import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const TitleBar = ({
  title = "title",
  description,
  link = "#",
  margin,
  mt,
  mr,
  ml,
  mb,
}) => {
  return (
    <div
      style={{
        margin: `${margin}`,
        marginTop: `${mt}`,
        marginRight: `${mr}`,
        marginLeft: `${ml}`,
        marginBottom: `${mb}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "3rem",
          }}
        >
          <h1
            style={{
              fontFamily: "Cormorant",
              fontWeight: "600",
            }}
          >
            {title}
          </h1>
        </div>
        <div
          style={{
            height: "3rem",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <Link
            to={link}
            style={{
              color: "#C97C68",
            }}
          >
            Show All
            <NavigateNextIcon />
          </Link>
        </div>
      </div>
      <p
        style={{
          color: "#80848D",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default TitleBar;
