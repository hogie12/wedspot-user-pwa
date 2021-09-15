import React from "react";
import HomeSearchType from "./HomeSearchType";

const WebContentInfo = () => {
  return (
    <div
      style={{
        marginTop: "10rem",
        marginRight: "10vw",
        marginLeft: "10vw",
        marginBottom: "10rem",
      }}
    >
      <div
        style={{
          margin: "3.5rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "39px",
            fontFamily: "Cormorant",
            fontWeight: "600",
          }}
        >
          Resourceful wedding directory
        </h1>
      </div>
      <HomeSearchType
        img="https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=455&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2Mjk0NDU4NjM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=620"
        title="Beyond creative works"
        content="Our team hand picks wedding vendors and posts pictures of their
    work to inspire you for your wedding. Find out who the wedding
    vendor(s) are in those wedding photos."
        flexDirection="row"
      />
      <HomeSearchType
        img="https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=455&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2Mjk0NDU4NjM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=620"
        // img="https://images.unsplash.com/photo-1562859135-3c009b776595?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=455&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2Mjk0NDYwMTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=620"
        title="Trusted Vendors"
        content="Read trusted reviews from previous clients about a vendor's
    service. Our team looks over every review to make sure the
    reviews are from real clients. Use these online referrals to make a decision which vendor you want to work with."
        flexDirection="row-reverse"
      />
    </div>
  );
};

export default WebContentInfo;
