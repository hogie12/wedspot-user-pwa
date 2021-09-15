import React from "react";
import img from "../asset/Logo.png";
import Kotak from "../asset/logokotak.png";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import red from "@material-ui/core/colors/red";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Card from "@material-ui/core/Card";
import "./list.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
    width: "780px",
    marginLeft: "250px",
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
    width: "70px",
    height: "70px",
    marginRight: "20px",
  },
  text: {
    marginLeft: "10px",
    marginTop: "100px",
    marginBottom: "10px",
  },
  cardContent: {},
  card: {
    alignItems: "center",
  },
  icon: {
    marginLeft: "30px",
    width: "30px",
    height: "30px",
    marginTop: "20px",
  },
}));

const InboxThumbnail = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="header" style={{ display: "flex", marginLeft: "100px" }}>
        <div className="logo">
          <img alt="" src={img} style={{ width: "150px", marginTop: "20px" }} />
        </div>
        <div className="logo1">
          <img
            alt=""
            src={Kotak}
            style={{
              height: "30px",
              marginLeft: "100px",
              paddingTop: "4px",
              marginTop: "20px",
            }}
          />
        </div>
        <div>
          <h3 style={{ marginLeft: "20px", marginTop: "25px" }}>
            Back to home
          </h3>
        </div>
      </div>
      <div className="item" style={{ display: "flex", marginLeft: "100px" }}>
        <div>
          <div
            className="container-1"
            style={{ display: "flex", marginTop: "100px" }}
          >
            <div className="content" style={{ marginLeft: "30px" }}>
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            </div>
            <div className="content-1">
              <Typography
                variant="h5"
                style={{ fontSize: "20px", marginTop: "15px" }}
              >
                Rara Sekar
              </Typography>
            </div>
          </div>
          <hr
            className="underline"
            style={{
              width: "160%",
              height: "1px",
              color: "#FF0000",
              size: "3",
              marginLeft: "20px",
              marginTop: "30px",
            }}
          ></hr>
          <div
            className="icon-profile"
            style={{ display: "flex", marginLeft: "15px" }}
          >
            <div className="Profile">
              <PersonIcon className={classes.icon} />
            </div>
            <div className="profile_name" style={{ marginLeft: "10px" }}>
              <h3 style={{ fontSize: "16px", marginTop: "23px" }}>Profile</h3>
            </div>
          </div>
          <div
            className="icon-profile"
            style={{ display: "flex", marginLeft: "15px" }}
          >
            <div className="Profile" style={{ marginTop: "50px" }}>
              <NotificationsIcon className={classes.icon} />
            </div>
            <div className="profile_name" style={{ marginLeft: "10px" }}>
              <h3 style={{ fontSize: "16px", marginTop: "73px" }}>
                Notification
              </h3>
            </div>
          </div>
          <div
            className="icon-profile"
            style={{ display: "flex", marginLeft: "15px" }}
          >
            <div className="Profile" style={{ marginTop: "50px" }}>
              <AssignmentIcon className={classes.icon} />
            </div>
            <div className="profile_name" style={{ marginLeft: "10px" }}>
              <h3 style={{ fontSize: "16px", marginTop: "75px" }}>Quotation</h3>
            </div>
          </div>
          <hr
            className="underline"
            style={{
              width: "160%",
              height: "1px",
              color: "#FF0000",
              size: "3",
              marginLeft: "20px",
              marginTop: "30px",
            }}
          ></hr>
          <div
            className="icon-profile"
            style={{ display: "flex", marginLeft: "15px" }}
          >
            <div className="Profile">
              <ExitToAppIcon className={classes.icon} />
            </div>
            <div className="profile_name" style={{ marginLeft: "10px" }}>
              <h3>Log out</h3>
            </div>
          </div>
        </div>
        <Card className={classes.root}>
          <div style={{ textAlign: "start", marginLeft: "30px" }}>
            <h1>Quotation</h1>
            <p>All the info about your quotations with the vendors</p>
          </div>
          <nav style={{ marginTop: "100px" }}>
            <a href="inbox" style={{ marginLeft: "30px" }}>
              Inbox
            </a>
            <a href="sent" style={{ marginLeft: "100px" }}>
              Sent
            </a>
          </nav>
          <div style={{ display: "flex" }}>
            <div
              className="container-1"
              style={{ display: "flex", marginTop: "100px" }}
            >
              <div className="content" style={{ marginLeft: "30px" }}>
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  style={{ width: "60px", height: "60px" }}
                >
                  R
                </Avatar>
              </div>
              <div className="content-1">
                <Typography variant="h5" style={{ fontSize: "19px" }}>
                  Gedong Putih
                </Typography>
                <Rating name="read-only" value="3" readOnly />
                <h1 style={{ marginTop: "0px", fontSize: "10px" }}>
                  Saturday, 25th Feb 21|16:09
                </h1>
              </div>
            </div>
            <button
              style={{
                marginLeft: "400px",
                marginTop: "100px",
                width: "90px",
                height: "40px",
              }}
            >
              Details
            </button>
          </div>
          <a href="download" style={{ marginLeft: "600px", marginTop: "0px" }}>
            Quotation attached
          </a>
        </Card>
      </div>
    </div>
  );
};

export default InboxThumbnail;
