/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";
import { CardContent, IconButton } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { getQuotationInboxDetail } from "../../../store/action/quotation";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
    width: "80px",
    height: "80px",
  },
  text: {
    marginLeft: "10px",
    marginTop: "100px",
    marginBottom: "10px",
  },
  card: {
    alignItems: "center",
  },
  icon: {
    marginLeft: "485px",
  },
  cardContent: {
    padding: "0 50px",
  },
}));

export default function DownloadQuotation({ onClick, quotationId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { inboxListDetail } = useSelector(
    (state) => state?.quotation?.listQuotationInboxDetail
  );

  const [state] = useState({ id: quotationId });

  useEffect(() => {
    dispatch(getQuotationInboxDetail(state.id));
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="sm">
      <Card className={classes.root}>
        <div
          className="container"
          style={{ alignItems: "start", textTransform: "capitalize" }}
        >
          <div className="title">
            <div className="closeIcon">
              <IconButton
                className={classes.icon}
                aria-label="close"
                onClick={onClick}
              >
                <Close />
              </IconButton>
            </div>
            <div style={{ textAlign: "start", padding: "0 3rem" }}>
              <h1 id="transition-modal-title">Request Quotation</h1>
            </div>
            {/* <Typography className={classes.text} style={{ fontSize: "30px" }}>
            Quotation Request
          </Typography> */}
            <div
              className="container-1"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "2rem",
                padding: "0 3rem",
              }}
              id="transition-modal-description"
            >
              <div className="content">
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  src={
                    inboxListDetail?.data?.quotation_request_id
                      ?.request_package_id?.package_album[0]
                  }
                ></Avatar>
              </div>
              <div className="content-1" style={{ marginLeft: "20px" }}>
                <Typography variant="h5">
                  {" "}
                  {
                    inboxListDetail?.data?.quotation_request_id
                      ?.request_package_id?.package_name
                  }
                </Typography>
                <Rating
                  name="read-only"
                  value={
                    inboxListDetail?.data?.quotation_vendor_id?.vendor_rating
                  }
                  readOnly
                />
                <p style={{ marginTop: "0px" }}>
                  {" "}
                  {moment(
                    inboxListDetail?.data?.quotation_request_id
                      ?.request_package_id?.created_at
                  ).format("dddd, Do MMM YYYY | hh:mm:ss")}
                </p>
              </div>
            </div>
            <CardContent className={classes.cardContent}>
              <div
                className="main-container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <div className="list-main">
                  <h6 style={{ color: "#a0a0a0" }}>Bride to be</h6>
                  <p>
                    {
                      inboxListDetail?.data?.quotation_request_id
                        ?.request_bride_name
                    }
                  </p>
                </div>
                <div className="list-main1">
                  <h6 style={{ color: "#a0a0a0" }}>Groom to be</h6>
                  <p>
                    {" "}
                    {
                      inboxListDetail?.data?.quotation_request_id
                        ?.request_groom_name
                    }
                  </p>
                </div>
                <div className="list-main2">
                  <h6 style={{ color: "#a0a0a0" }}>City live</h6>
                  <p>Bandung</p>
                </div>
              </div>
              <hr
                className="underline"
                style={{
                  width: "100%",
                  height: "1px",
                  color: "#FF0000",
                  size: "3",
                }}
              ></hr>
              <div
                className="main-container"
                style={{
                  display: "flex",
                }}
              >
                <div className="list-body" style={{ width: "13.2rem" }}>
                  <h6 style={{ color: "#a0a0a0" }}>Wedding Location</h6>
                  <p>
                    {
                      inboxListDetail?.data?.quotation_request_id
                        ?.request_wedding_location
                    }
                  </p>
                </div>
                <div className="list-body">
                  <h6 style={{ color: "#a0a0a0" }}>Wedding Date</h6>
                  <p>
                    {" "}
                    {moment(
                      inboxListDetail?.data?.quotation_request_id
                        ?.request_wedding_date
                    ).format("dddd, Do MMM YYYY | hh:mm:ss")}
                  </p>
                </div>
              </div>
              <div
                className="main-container"
                style={{
                  display: "flex",
                  marginTop: "50px",
                }}
              >
                <div className="list-footer" style={{ width: "13.2rem" }}>
                  <h6 style={{ color: "#a0a0a0" }}>Budget</h6>
                  <p>
                    {" "}
                    {
                      inboxListDetail?.data?.quotation_request_id
                        ?.request_budget
                    }
                  </p>
                </div>
                <div className="list-footer1">
                  <h6 style={{ color: "#a0a0a0" }}>Number of Invitees</h6>
                  <p>
                    {" "}
                    {
                      inboxListDetail?.data?.quotation_request_id
                        ?.request_invitees
                    }{" "}
                    pax
                  </p>
                </div>
              </div>
              <a
                href={inboxListDetail?.data?.quotation_file}
                style={{ textDecoration: "none" }}
                rel="noreferrer"
                target="_blank"
              >
                <Button
                  type="Send Request"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "100px" }}
                >
                  Download Quotation
                </Button>
              </a>
            </CardContent>
          </div>
        </div>
      </Card>
    </Container>
  );
}
