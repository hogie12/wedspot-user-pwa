import React from "react";
import Hand from "../asset/NoHand.png";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { Link } from "react-router-dom";

const SentModal = ({ title = "Request Sent!" }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "5rem",
      }}
    >
      <img
        src={Hand}
        alt="No Result"
        style={{
          width: "320px",
          margin: "24px",
        }}
      ></img>
      <h3 style={{ fontSize: "16px", margin: "4px", fontWeight: 600 }}>
        {title}
      </h3>
      {/* <p style={{ fontSize: "16px", margin: "4px" }}>{description}</p> */}
      {/* <button>View My Quotation Request</button> */}
      <Link to="/account/quotation">
        <ButtonPrimary content="View My Quotation Request" />
      </Link>
    </div>
  );
};

export default SentModal;
