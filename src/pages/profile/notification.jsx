/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSelector, useDispatch } from "react-redux";
import { getUserNotification } from "../../store/action/notification";
import moment from "moment";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "none",
    padding: "25px",
  },
}));

export default function Notification() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const { notifList } = useSelector(
    (state) => state?.notification?.listNotification
  );
  // console.log("notifList", notifList);

  useEffect(() => {
    dispatch(getUserNotification());
  }, [dispatch]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: "white" }}>
      <h1>Notifications</h1>
      <p>You will get the latest info and updates from us</p>
      {notifList?.data?.map((data, index) => (
        <div
          style={
            data?.notification_isNew
              ? {
                  backgroundColor: "#EEF2E8",
                  padding: "1rem",
                }
              : { padding: "1rem" }
          }
          onClick={() => {
            console.log(data.notification_id);
          }}
        >
          <p>
            {moment(data.created_at).format("dddd, Do MMM YYYY | hh:mm:ss")}
          </p>
          <h6>{data.notification_title}</h6>
          <h6>{data.notification_body}</h6>
        </div>
      ))}
      {/* <div>
        <p>Saturday, 25th Feb 21 | 16:09</p>
        <h6>Your requested quotation is here</h6>
        <h6>
          Check out your requested quotation for Gedong Putih Garden & Hall by
          Gedong Putih
        </h6>
      </div>
      <div>
        <p>Saturday, 25th Feb 21 | 16:09</p>
        <h6>Your quotation already sent</h6>
        <h6>Yay! Your quotation request has been sent to the vendor</h6>
      </div>
      <div>
        <p>Today | 16:09</p>
        <h6>Your quotation already sent</h6>
        <h6>Yay! Your quotation request has been sent to the vendor</h6>
      </div>
      <div>
        <p>Today | 16:09</p>
        <h6>Your quotation already sent</h6>
        <h6>Yay! Your quotation request has been sent to the vendor</h6>
      </div> */}
    </div>
  );
}
