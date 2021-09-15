import React, { useEffect } from "react";
import Venue from "../card/Venue";
import TitleBar from "../TitleBar";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { getVendorHome } from "../../store/action/vendor";

const HomeVendorBanner = () => {
  const dispatch = useDispatch();
  const { vendors, isLoading } = useSelector(
    (state) => state.vendors.listVendorExample
  );

  useEffect(() => {
    dispatch(getVendorHome());
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
        title={"Best Planner for You"}
        description={"Handle all the nitty gritties for your big day"}
        link="searchdetail/organizer"
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
            {vendors?.data?.map((data, index) => (
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

export default HomeVendorBanner;
