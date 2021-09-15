/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import ImageHeader from "../../component/image-header/imgheader";
import { VendorCard } from "../../component/card/detailcard";
import Package from "../../component/card/Package";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVendorId } from "../../store/action/detail";

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.vendorDetail);

  // console.log(data);
  useEffect(() => {
    dispatch(getVendorId(id));
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            height: "50vh",
            alignItems: "center",
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <>
          <ImageHeader
            type={data.vendor_type}
            name={data.vendor_name}
            header={data.vendor_header}
          />
          <Container className="pt-5 pb-5">
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <div className="pb-3">
                  <h1>All Package</h1>
                  <p>Which one that fits to your preference?</p>
                </div>
                <Grid container spacing={5}>
                  {data.packages.map((data, idx) => (
                    <Grid item xs={6}>
                      <Package
                        link={`/package/${data.package_id}`}
                        image={data.package_album[0]}
                        title={data.package_name}
                        price={data.package_price}
                        data={data}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <VendorCard
                  avatar={data.vendor_avatar}
                  name={data.vendor_name}
                  rating={data.vendor_rating}
                  minprice={data.vendor_min_price}
                  maxprice={data.vendor_max_price}
                  min={data.vendor_min_capacity}
                  max={data.vendor_max_capacity}
                  location={data.vendor_location}
                  phone={data.vendor_phone}
                  email={data.vendor_email_info}
                  web={data.vendor_website}
                  link_facebook={data.vendor_facebook}
                  link_twitter={data.vendor_twitter}
                  link_instagram={data.vendor_instagram}
                />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
}

export default DetailPage;
