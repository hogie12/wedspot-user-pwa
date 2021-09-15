/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";
import { CardContent, IconButton } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import { useDispatch, useSelector } from "react-redux";
import { getQuotationSentDetail } from "../../../store/action/quotation";
import moment from "moment";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    height: "550px",
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

export default function QutationNotif({ onClick, requestId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sentListDetail } = useSelector(
    (state) => state?.quotation?.listQuotationSentDetail
  );
  const [state, setState] = useState({ id: requestId });

  useEffect(() => {
    dispatch(getQuotationSentDetail(state.id));
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="sm">
      <Card className={classes.root}>
        <div
          className="container"
          style={{
            alignItems: "start",
            padding: "0 10px",
            textTransform: "capitalize",
          }}
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
            <div style={{ textAlign: "start", margin: "0 15px" }}>
              <h1 id="transition-modal-title">Request Quotation</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                backgroundColor: "#FEE5DB",
                width: "inherit",
                margin: "10px 20px",
                padding: "20px 20px",
              }}
            >
              <div>
                <NotificationImportantIcon />
              </div>
              <div>
                <p>
                  Vendor will notify you once they have sent you the quotation.
                  You will get the quotation on the Inbox tab.
                </p>
              </div>
            </div>
            <div
              className="container-1"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "20px",
                padding: "0 1.5rem",
              }}
              id="transition-modal-description"
            >
              <div className="content">
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  src={
                    sentListDetail?.data?.request_package_id?.package_album[0]
                  }
                ></Avatar>
              </div>
              <div className="content-1" style={{ marginLeft: "20px" }}>
                <Typography variant="h5">
                  {sentListDetail?.data?.request_package_id?.package_name}
                </Typography>
                <Rating name="read-only" value="3" readOnly />
                <p style={{ marginTop: "0px" }}>
                  {moment(sentListDetail?.data?.created_at).format(
                    "dddd, Do MMM YYYY | hh:mm:ss"
                  )}
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
                  <p>{sentListDetail?.data?.request_bride_name}</p>
                </div>
                <div className="list-main1">
                  <h6 style={{ color: "#a0a0a0" }}>Groom to be</h6>
                  <p>{sentListDetail?.data?.request_groom_name}</p>
                </div>
                <div className="list-main2">
                  <h6 style={{ color: "#a0a0a0" }}>City live</h6>
                  <p>{sentListDetail?.data?.request_city}</p>
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
                <div
                  className="list-body"
                  style={{
                    width: "13.2rem",
                  }}
                >
                  <h6 style={{ color: "#a0a0a0" }}>Wedding Location</h6>
                  <p>{sentListDetail?.data?.request_city}</p>
                </div>
                <div className="list-body">
                  <h6 style={{ color: "#a0a0a0" }}>Wedding Date</h6>
                  <p>
                    {moment(sentListDetail?.data?.request_wedding_date).format(
                      "dddd, Do MMM YYYY | hh:mm:ss"
                    )}
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
                <div
                  className="list-footer"
                  style={{
                    width: "13.2rem",
                  }}
                >
                  <h6 style={{ color: "#a0a0a0" }}>Budget</h6>
                  <p>{sentListDetail?.data?.request_budget}</p>
                </div>
                <div className="list-footer1">
                  <h6 style={{ color: "#a0a0a0" }}>Number of Invitees</h6>
                  <p>{sentListDetail?.data?.request_invitees} pax</p>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </Container>
  );
}
