/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import iphone from "../../assets/iphone.png";
import ButtonPrimary from "../buttons/ButtonPrimary";

const MobileDownloadBanner = () => {
  return (
    <div
      style={{
        background: "#F8EEE8",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "27.4rem",
          textAlign: "center",
          paddingTop: "5.6rem",
        }}
      >
        <img src={iphone} height="326px" />
      </div>
      <div
        style={{
          paddingTop: "4rem",
        }}
      >
        <h1
          style={{
            fontFamily: "Cormorant",
            fontWeight: "600",
          }}
        >
          You focus on the big day,
          <br />
          leave us to focus on you
        </h1>
        <p>
          Browse through some of our top venue and wedding planner
          recommendations
        </p>
        <ButtonPrimary content="Download Wedspot" width="262px" />
      </div>
    </div>
  );
};

export default MobileDownloadBanner;
