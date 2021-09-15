/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const VendorListBanner = () => {
  return (
    <div
      style={{
        borderTop: "2px solid #FDDDC4",
        borderBottom: "2px solid #FDDDC4",
        // paddingTop: "6.25rem",
        // paddingLeft: "4rem",
        // paddingRight: "4rem",
        minHeight: "30.7rem",
        marginTop: "10rem",
        marginRight: "10rem",
        marginLeft: "10rem",
        marginBottom: "10rem",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          height: "inherit",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontFamily: "Cormorant",
            fontWeight: "600",
          }}
        >
          Browse a large and growing database
          <br />
          of wedding vendors
        </h1>
        <p
          style={{
            fontSize: "16px",
          }}
        >
          We have been collaborated with many great wedding platforms to ensure
          your dream wedding come true
        </p>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#80848D",
              width: "200px",
              borderRadius: "50%",
            }}
          >
            <img src={imgv} height="80px" />
          </div>
          <div
            style={{
              background: "#80848D",
              width: "200px",
              borderRadius: "50%",
            }}
          >
            <img src={imgv} height="80px" />
          </div>
          <div
            style={{
              background: "#80848D",
              width: "200px",
              borderRadius: "50%",
            }}
          >
            <img src={imgv} height="80px" />
          </div>
          <div
            style={{
              background: "#80848D",
              width: "200px",
              borderRadius: "50%",
            }}
          >
            <img src={imgv} height="80px" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VendorListBanner;
