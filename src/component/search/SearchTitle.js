import React from "react";
import QuotationSent from "../buttons/QuotationSent";

const SearchTitle = () => {
  return (
    <div
      style={{
        margin: "2.5rem 9.1%",
      }}
    >
      <p
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        Showing all search result for{" "}
        <h5
          style={{
            margin: "0 0.2rem",
          }}
        >
          {" "}
          “Outdoor Venue”{" "}
        </h5>{" "}
        in Wedspot
      </p>
      <div>
        <QuotationSent background="white" content="Packages" />
        <QuotationSent background="white" content="Venue" />
        <QuotationSent background="white" content="Wedding Organizer" />
      </div>
    </div>
  );
};

export default SearchTitle;
