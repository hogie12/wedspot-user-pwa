import React from "react";
import SearchInput from "../search/search";

const HomeSearchBanner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8d2VkZGluZ3x8fHx8fDE2MjkyNzk3NTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1540")`,
          backgroundSize: "cover",
          textAlign: "center",
          height: "450px",
          zIndex: "-1",
        }}
      >
        {/* <Header background="transparent" /> */}
        <div
          style={{
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              color: "white",
              textShadow: "#80848D 0px 0px 5px",
              marginTop: "",
              fontFamily: "Cormorant",
              fontWeight: "600",
            }}
          >
            All Search Results
          </p>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default HomeSearchBanner;
