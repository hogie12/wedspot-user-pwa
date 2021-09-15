/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import DownloadQuotation from "../../component/card/quotation/DownloadQuotationmodal";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ButtonSecondary from "../../component/buttons/ButtonSecondary";
import QutationNotif from "../../component/card/quotation/quotationnotifmodal";
import { useSelector, useDispatch } from "react-redux";
import {
  getQuotationInbox,
  getQuotationSent,
} from "../../store/action/quotation";
import NoresultPhone from "../../component/noresult/NoresultPhone";
import moment from "moment";
import { CircularProgress } from "@material-ui/core";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

export default function Quotation({ rating, image }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { inboxList, inboxLoading } = useSelector(
    (state) => state?.quotation?.listQuotationInbox
  );
  // console.log("inboxLoading", inboxLoading);
  // const { inboxListDetail } = useSelector(
  //   (state) => state?.quotation?.listQuotationInboxDetail
  // );
  // const inboxList = "ada isinya coy";
  // console.log("inboxList", inboxList);
  // console.log("inboxListDetail", inboxListDetail);

  const { sentList, sentLoading } = useSelector(
    (state) => state?.quotation?.listQuotationSent
  );

  // const { sentListDetail } = useSelector(
  //   (state) => state?.quotation?.listQuotationSentDetail
  // );

  // console.log("sentList", sentList);
  // console.log("sentlistDetail", sentListDetail);

  useEffect(() => {
    dispatch(getQuotationInbox());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getQuotationSent());
  }, [dispatch]);

  const [requestId, setRequestid] = useState();
  const [quotationId, setQuotationid] = useState();

  const [id, setId] = useState({
    _id: "",
  });

  useEffect(() => {
    setId({ ...id, id: sentList?.data?.request_id });
  }, [sentList?.data]);

  useEffect(() => {
    setId({ ...id, id: inboxList?.data?.quotation_id });
  }, [inboxList?.data]);

  // console.log("id", id);

  const [open, setOpen] = React.useState(false);

  const handleOpenInbox = (quotation_id) => {
    setQuotationid(quotation_id);
    setOpen(true);
    // console.log(data);
  };
  const handleOpen = (request_id) => {
    setRequestid(request_id);
    setOpen(true);
    // console.log(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: "white" }}>
      <h1>Quotation</h1>
      <p style={{ marginBottom: "70px" }}>
        All the info about your quotations with the vendors
      </p>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Inbox" {...a11yProps(0)} />
        <Tab label="Sent" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {
          // inboxLoading ? (
          //   <div
          //     style={{
          //       display: "flex",
          //       width: "100%",
          //       justifyContent: "center",
          //     }}
          //   >
          //     <CircularProgress color="secondary" />
          //   </div>
          // ) :
          inboxList ? (
            <div>
              {inboxList?.data?.map((data, index) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="container-1"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="content" style={{ marginLeft: "30px" }}>
                      <Avatar
                        aria-label="recipe"
                        className={classes.avatar}
                        style={{ width: "60px", height: "60px" }}
                      >
                        <img
                          src={
                            data.quotation_request_id.request_package_id
                              .package_album[0]
                          }
                          alt=""
                          style={{ maxWidth: "60px", maxHeight: "60px" }}
                        ></img>
                      </Avatar>
                    </div>
                    <div
                      className="content-1"
                      style={{ marginLeft: "20px", marginBottom: "30px" }}
                    >
                      <Typography
                        variant="h5"
                        style={{ fontSize: "19px", marginTop: "30px" }}
                      >
                        {
                          data.quotation_request_id.request_package_id
                            .package_name
                        }
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          marginTop: "none",
                        }}
                      >
                        <Rating
                          name="read-only"
                          value={data.quotation_vendor_id.vendor_rating}
                          readOnly
                        />
                        <h5 style={{ margin: "0 12px" }}>
                          {data.quotation_vendor_id.vendor_rating}
                          /5
                        </h5>
                      </div>
                      <h1 style={{ marginTop: "0px", fontSize: "10px" }}>
                        {moment(data.created_at).format(
                          "dddd, Do MMM YYYY | hh:mm:ss"
                        )}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <ButtonSecondary
                      width="110px"
                      content="Details"
                      height="36px"
                      onClick={() => handleOpenInbox(data.quotation_id)}
                    />
                    <a
                      href={data.quotation_file}
                      style={{ textDecoration: "none" }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <p style={{ textAlign: "end" }}>Quotation attached</p>
                    </a>
                  </div>
                </div>
              ))}
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <DownloadQuotation
                      onClick={handleClose}
                      quotationId={quotationId}
                    />
                  </div>
                </Fade>
              </Modal>

              {/* <a href="download" style={{ textDecoration: "none" }}>
            <p style={{ textAlign: "end" }}>Quotation attached</p>
          </a> */}
            </div>
          ) : (
            <NoresultPhone
              title="No received quotations"
              description="Once vendor sent you quotation, it’ll be shown here"
            />
          )
        }
      </TabPanel>
      {/* ----------------quotation sent---------------------- */}
      <TabPanel value={value} index={1}>
        {sentLoading ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="secondary" />
          </div>
        ) : sentList ? (
          <div>
            {sentList?.data?.map((data, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  className="container-1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="content" style={{ marginLeft: "30px" }}>
                    <Avatar
                      aria-label="recipe"
                      className={classes.avatar}
                      style={{ width: "60px", height: "60px" }}
                      src={data.request_package_id.package_album[0]}
                    ></Avatar>
                  </div>
                  <div
                    className="content-1"
                    style={{ marginLeft: "20px", marginBottom: "30px" }}
                  >
                    <Typography
                      variant="h5"
                      style={{ fontSize: "19px", marginTop: "30px" }}
                    >
                      {data.request_package_id.package_name}
                    </Typography>
                    <div style={{ display: "flex" }}>
                      <Rating
                        name="read-only"
                        value={data.request_vendor_id.vendor_rating}
                        readOnly
                      />
                      <h5 style={{ margin: "0 12px" }}>
                        {data.request_vendor_id.vendor_rating}
                        /5
                      </h5>
                    </div>
                    <h1 style={{ marginTop: "0px", fontSize: "10px" }}>
                      {moment(data.created_at).format(
                        "dddd, Do MMM YYYY | hh:mm:ss"
                      )}
                    </h1>
                  </div>
                </div>
                <ButtonSecondary
                  width="110px"
                  content="Details"
                  height="36px"
                  onClick={() => handleOpen(data.request_id)}
                />
                {/* <button
            onClick={handleOpen}
            style={{
              marginLeft: "570px",
              marginTop: "100px",
              width: "90px",
              height: "40px",
            }}
          >
            Details
          </button> */}
              </div>
            ))}
          </div>
        ) : (
          <NoresultPhone
            title="No sent quotation"
            description="Try to enquiry to some vendors, maybe?"
            titleButton="Search Vendor"
            width="27rem"
            link="/searchdetail/vendor"
          />
        )}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <QutationNotif onClick={handleClose} requestId={requestId} />
            </div>
          </Fade>
        </Modal>
      </TabPanel>
    </div>
  );
}
