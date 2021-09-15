import React from "react";
import Header from "../header/header";
import SearchInput from "../search/search";

const HomeHeaderBanner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2MjkyNzk3NTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1540")`,
          backgroundSize: "cover",
          textAlign: "center",
          height: "450px",
          zIndex: "-1",
        }}
      >
        <Header background="transparent" />
        <h1
          style={{
            fontSize: "100px",
            color: "white",
            textShadow: "#80848D 0px 0px 5px",

            fontFamily: "Cormorant",
            fontWeight: "600",
          }}
        >
          Once in a<br />
          life time moments
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "white",
            textShadow: "#80848D 0px 0px 5px",
          }}
        >
          Try “Best Wedding Planner” or “Outdoor venue”
        </p>
      </div>

      <SearchInput marginTop="-2.7rem" />
    </div>
  );
};

export default HomeHeaderBanner;
