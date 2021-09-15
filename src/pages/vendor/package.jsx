/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Grid, CircularProgress } from "@material-ui/core";
import ImageHeader from "../../component/image-header/imgheader";
import { PackageDetailCard } from "../../component/card/detailcard";
import { ArrowBackIos } from "@material-ui/icons";
import ImageCarousel from "../../component/carousel/ImageCarousel";
import Modal from "@material-ui/core/Modal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackageId } from "../../store/action/detail";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  close: {
    color: "white",
    cursor: "pointer",
    width: "30px",
    position: "absolute",
    zIndex: "10",
    top: "8vh",
    right: "5vw",
    "&:hover": {
      color: "black",
    },
  },
  image: {
    maxWidth: "100%",
  },
}));

function PackageDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useSelector((state) => state.packageDetail);
  // console.log("data", data);

  useEffect(() => {
    dispatch(getPackageId(id));
  }, [dispatch]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            type={data?.package_vendor_id.vendor_type}
            name={data?.package_name}
            header={data?.package_vendor_id.vendor_header}
          />
          <Container className="pt-5 pb-5">
            <Grid container spacing={5}>
              <Grid item xs={8}>
                <div>
                  <Link
                    to={`/vendor/${data?.package_vendor_id.vendor_id}`}
                    className="text-black text-decoration-none"
                  >
                    <ArrowBackIos />
                    Back to All package
                  </Link>
                </div>
                <h1 className="pt-5">{data?.package_name}</h1>
                <p className="mb-4">{`by ${data?.package_vendor_id.vendor_name}`}</p>
                <h4>Details</h4>
                <p className="pb-3 pe-3">{data?.package_details}</p>
                <h3 className="pb-2">{`Take a look inside ${data?.package_name}`}</h3>
                <Grid container spacing={5}>
                  {data.package_album.map((img, idx) => (
                    <Grid item xs={6} key={idx}>
                      <img
                        src={img}
                        alt=""
                        onClick={handleOpen}
                        className={classes.image}
                      />
                    </Grid>
                  ))}

                  <Modal open={open} onClose={handleClose}>
                    <div>
                      <h1 onClick={handleClose} className={classes.close}>
                        X
                      </h1>
                      <ImageCarousel img={data?.package_album} />
                    </div>
                  </Modal>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <PackageDetailCard
                  avatar={data?.package_vendor_id.vendor_avatar}
                  name={data?.package_vendor_id.vendor_name}
                  price={data?.package_vendor_id.vendor_max_price}
                  location={data?.package_vendor_id.vendor_location}
                  min={data?.package_vendor_id.vendor_min_capacity}
                  max={data?.package_vendor_id.vendor_max_capacity}
                  services={data?.package_services}
                  rating={data?.package_vendor_id.vendor_rating}
                />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
}

export default PackageDetail;
