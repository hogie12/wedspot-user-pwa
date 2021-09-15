import React, { useEffect } from "react";
import Venue from "../card/Venue";
import TitleBar from "../TitleBar";
import { useDispatch, useSelector } from "react-redux";
import { getVenueHome } from "../../store/action/package";
import { CircularProgress } from "@material-ui/core";

const HomeVenueBanner = () => {
  const dispatch = useDispatch();
  const { packages, isLoading } = useSelector(
    (state) => state.packages.listVenueExample
  );

  useEffect(() => {
    dispatch(getVenueHome());
  }, [dispatch]);

  return (
    <div
      style={{
        marginTop: "10rem",
        marginRight: "10rem",
        marginLeft: "10rem",
        marginBottom: "10rem",
      }}
    >
      <TitleBar
        mb={"2rem"}
        title={"Garden or Indoor Wedding Party, you name it"}
        description={
          "Look through the most beautiful wedding venues to find the perfect place to host your banquet."
        }
        link="searchdetail/venue"
      />
      {isLoading ? (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "scroll",
            }}
          >
            {packages?.data?.map((data, index) => (
              <Venue
                link={`/vendor/${data.vendor_id}`}
                image={data.vendor_header}
                title={data.vendor_name}
                location={data.vendor_location}
                rating={data.vendor_rating}
                width="300px"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeVenueBanner;
