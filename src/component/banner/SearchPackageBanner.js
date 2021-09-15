import React from "react";
import Package from "../card/Package";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import NoresultHand from "../noresult/NoresultHand";

const SearchPackageBanner = (datas) => {
  return (
    <div
      style={{
        padding: "0 9.1rem",
        background: "#F8EEE8",
        height: "37.78rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Cormorant",
          fontWeight: "600",
        }}
      >
        Special Wedding Packages for You
      </h1>

      {datas ? (
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "scroll",
          }}
        >
          {datas?.datas?.data?.map((data) => (
            <Package
              link={`/package/${data.package_id}`}
              image={data.package_album[0]}
              title={data.package_name}
              price={data.package_price}
              data={data}
              height="330px"
            />
          ))}
        </div>
      ) : (
        <NoresultHand
          title="Oops, we couldn’t find anything"
          description="Please try using another keyword to get better results"
        />
      )}
      <div
        style={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <Link to="/searchdetail/packages" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            style={{
              color: "#455437",
              borderColor: "#455437",
              width: "262px",
              height: "55px",
            }}
          >
            Browse All The Packages
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SearchPackageBanner;
