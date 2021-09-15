import React, { useState } from "react";
import { Search, Room } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function SearchInput({ marginTop }) {
  const [searchKeyword, setSearchKeyword] = useState({
    keyword: "",
    location: "",
  });
  console.log("searchKeyword", searchKeyword);

  const changeForm = (e) => {
    setSearchKeyword({ ...searchKeyword, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ width: "100vw", background: "transparent" }}>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="d-flex"
          style={{
            background: "white",
            marginTop: `${marginTop}`,
            boxShadow: "#80848D 0px 1px 2px",
            width: "52.5rem",
            height: "5rem",
            color: "#80848D",
          }}
        >
          <div className="d-flex align-items-center">
            <div className="me-3">
              <Search style={{ marginLeft: "1.5rem" }} />
            </div>
            <InputBase
              placeholder="Try “Best Wedding Planner” or “Outdoor venue”"
              value={searchKeyword.keyword}
              name="keyword"
              onChange={(e) => changeForm(e)}
              style={{ width: "18rem", marginRight: "2.5rem" }}
            />
          </div>
          <div
            className="d-flex align-items-center"
            style={{ borderLeft: "#E1E1E1 2px solid", margin: "0.65rem 0" }}
          >
            <div></div>
            <div className="me-3">
              <Room style={{ marginLeft: "2rem" }} />
            </div>
            <InputBase
              placeholder="City"
              value={searchKeyword.location}
              name="location"
              onChange={(e) => changeForm(e)}
              style={{ width: "10rem", marginRight: "2.5rem" }}
            />
          </div>
          <div>
            <Link
              to={
                searchKeyword.location.length === 0
                  ? `/search/${searchKeyword.keyword}`
                  : `/search/${searchKeyword.keyword}/${searchKeyword.location}`
              }
              style={{ textDecoration: "none" }}
            >
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{
                  width: "128px",
                  height: "49px",
                  margin: "0.65rem",
                  marginRight: "1.5rem",
                }}
              >
                search
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
