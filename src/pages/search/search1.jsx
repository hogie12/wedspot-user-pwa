/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import HomeSearchBanner from "../../component/banner/HomeSearchBanner";
import SearchPackageBanner from "../../component/banner/SearchPackageBanner";
import QuotationSent from "../../component/buttons/QuotationSent";
import Venue from "../../component/card/Venue";
import NoresultHand from "../../component/noresult/NoresultHand";
import TitleBar from "../../component/TitleBar";
import {
  getOrganizerSearch,
  getPackageSearch,
  getVenueSearch,
} from "../../store/action/package";

const HomeSearch = () => {
  var { keyword, location } = useParams();
  // console.log("keyword", keyword);
  // console.log("location", location);

  const dispatch = useDispatch();
  const { resultPackages, packageLoading } = useSelector(
    (state) => state.packages.listPackageSearch
  );

  const { resultVenues, venueLoading } = useSelector(
    (state) => state.packages.listVenueSearch
  );
  const { resultOrganizers, organizerLoading } = useSelector(
    (state) => state.packages.listOrganizerSearch
  );
  const searchKeyword = keyword;
  const searchLocation = location;

  // console.log("keyword", keyword);
  // console.log("location", location);
  // console.log("searchKeyword", searchKeyword);
  // console.log("searchLocation", searchLocation);

  useEffect(() => {
    dispatch(getPackageSearch(1, keyword, location));
  }, [dispatch, 1, keyword, location]);

  useEffect(() => {
    dispatch(getVenueSearch(1, keyword, location));
  }, [dispatch, 1, keyword, location]);

  useEffect(() => {
    dispatch(getOrganizerSearch(1, keyword, location));
  }, [dispatch, 1, keyword, location]);

  return (
    <div>
      <HomeSearchBanner />
      <div
        style={{
          margin: "2.5rem 9.1%",
        }}
      >
        {keyword ? (
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
              “{keyword}”{" "}
            </h5>{" "}
            in Wedspot
          </p>
        ) : null}
        <div>
          <Link to="/searchdetail/packages">
            <QuotationSent background="white" content="Packages" />
          </Link>
          <Link to="/searchdetail/venue">
            <QuotationSent background="white" content="Venue" />
          </Link>
          <Link to="/searchdetail/organizer">
            <QuotationSent background="white" content="Wedding Organizer" />
          </Link>
        </div>
      </div>
      {/* <SearchPackageBanner /> */}
      <SearchPackageBanner datas={resultPackages} />
      <div
        style={{
          padding: "0 9.1%",
          margin: "6.4rem 0",
        }}
      >
        <TitleBar title="Venue" link="/searchdetail/venue" />
        {venueLoading ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="secondary" />
          </div>
        ) : resultVenues ? (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "scroll",
            }}
          >
            {resultVenues?.data?.map((data) => (
              <Venue
                link={`/package/${data.package_id}`}
                image={data.package_album[0]}
                title={data.package_name}
                location={data.package_location}
                rating={data.package_vendor_id.vendor_rating}
                width="300px"
              />
            ))}
          </div>
        ) : (
          <NoresultHand
            title="Oops, we couldn’t find anything"
            description="Please try using another keyword to get better results"
          />
        )}
      </div>
      <div
        style={{
          padding: "0 9.1%",
          margin: "6.4rem 0",
        }}
      >
        <TitleBar title="Wedding Organizer" link="/searchdetail/organizer" />
        {organizerLoading ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="secondary" />
          </div>
        ) : resultOrganizers ? (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "scroll",
            }}
          >
            {resultOrganizers?.data?.map((data) => (
              <Venue
                link={`/package/${data.package_id}`}
                image={data.package_vendor_id.vendor_header}
                title={data.package_name}
                location={data.package_location}
                rating={data.vendor_rating}
                width="300px"
              />
            ))}
          </div>
        ) : (
          <NoresultHand
            title="Oops, we couldn’t find anything"
            description="Please try using another keyword to get better results"
          />
        )}
      </div>
    </div>
  );
};

export default HomeSearch;
